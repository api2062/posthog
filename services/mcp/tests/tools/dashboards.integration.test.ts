import { afterEach, beforeAll, describe, expect, it } from 'vitest'

import {
    type CreatedResources,
    SAMPLE_HOGQL_QUERIES,
    TEST_ORG_ID,
    TEST_PROJECT_ID,
    cleanupResources,
    createTestClient,
    createTestContext,
    generateUniqueKey,
    getToolByName,
    parseToolResponse,
    setActiveProjectAndOrg,
    validateEnvironmentVariables,
} from '@/shared/test-utils'
import createInsightTool from '@/tools/insights/create'
import type { Context } from '@/tools/types'

describe('Dashboards', { concurrent: false }, () => {
    let context: Context
    const createdResources: CreatedResources = {
        featureFlags: [],
        insights: [],
        dashboards: [],
        surveys: [],
        actions: [],
        cohorts: [],
    }

    beforeAll(async () => {
        validateEnvironmentVariables()
        const client = createTestClient()
        context = createTestContext(client)
        await setActiveProjectAndOrg(context, TEST_PROJECT_ID!, TEST_ORG_ID!)
    })

    afterEach(async () => {
        await cleanupResources(context.api, TEST_PROJECT_ID!, createdResources)
    })

    describe('dashboard-create tool', () => {
        const createTool = getToolByName('dashboard-create')

        it('should create a dashboard with minimal fields', async () => {
            const params = {
                name: generateUniqueKey('Test Dashboard'),
                description: 'Integration test dashboard',
                pinned: false,
            }

            const result = await createTool.handler(context, params)
            const dashboardData = parseToolResponse(result)

            expect(dashboardData.id).toBeTruthy()
            expect(dashboardData.name).toBe(params.name)
            expect(dashboardData._posthogUrl).toContain('/dashboard/')

            createdResources.dashboards.push(dashboardData.id)
        })

        it('should create a dashboard with tags', async () => {
            const params = {
                name: generateUniqueKey('Tagged Dashboard'),
                description: 'Dashboard with tags',
                tags: ['test', 'integration'],
                pinned: false,
            }

            const result = await createTool.handler(context, params)
            const dashboardData = parseToolResponse(result)

            expect(dashboardData.id).toBeTruthy()
            expect(dashboardData.name).toBe(params.name)

            createdResources.dashboards.push(dashboardData.id)
        })
    })

    describe('dashboard-update tool', () => {
        const createTool = getToolByName('dashboard-create')
        const updateTool = getToolByName('dashboard-update')

        it('should update dashboard name and description', async () => {
            const createResult = await createTool.handler(context, {
                name: generateUniqueKey('Original Dashboard'),
                description: 'Original description',
                pinned: false,
            })
            const createdDashboard = parseToolResponse(createResult)
            createdResources.dashboards.push(createdDashboard.id)

            const updateResult = await updateTool.handler(context, {
                id: createdDashboard.id,
                name: 'Updated Dashboard Name',
                description: 'Updated description',
            })
            const updatedDashboard = parseToolResponse(updateResult)

            expect(updatedDashboard.id).toBe(createdDashboard.id)
            expect(updatedDashboard.name).toBe('Updated Dashboard Name')
        })
    })

    describe('dashboards-get-all tool', () => {
        const getAllTool = getToolByName('dashboards-get-all')

        it('should return dashboards with proper structure', async () => {
            const result = await getAllTool.handler(context, {})
            const response = parseToolResponse(result)

            expect(response.results).toBeTruthy()
            expect(Array.isArray(response.results)).toBe(true)
            if (response.results.length > 0) {
                const dashboard = response.results[0]
                expect(dashboard).toHaveProperty('id')
                expect(dashboard).toHaveProperty('name')
            }
        })
    })

    describe('dashboard-get tool', () => {
        const createTool = getToolByName('dashboard-create')
        const getOneTool = getToolByName('dashboard-get')

        it('should get a specific dashboard by ID', async () => {
            const createResult = await createTool.handler(context, {
                name: generateUniqueKey('Get Test Dashboard'),
                description: 'Test dashboard for get operation',
                pinned: false,
            })
            const createdDashboard = parseToolResponse(createResult)
            createdResources.dashboards.push(createdDashboard.id)

            const result = await getOneTool.handler(context, { id: createdDashboard.id })
            const retrievedDashboard = parseToolResponse(result)

            expect(retrievedDashboard.id).toBe(createdDashboard.id)
            expect(retrievedDashboard.name).toContain('Get Test Dashboard')
        })
    })

    describe('dashboard-delete tool', () => {
        const createTool = getToolByName('dashboard-create')
        const deleteTool = getToolByName('dashboard-delete')

        it('should delete a dashboard', async () => {
            const createResult = await createTool.handler(context, {
                name: generateUniqueKey('Delete Test Dashboard'),
                description: 'Test dashboard for deletion',
                pinned: false,
            })
            const createdDashboard = parseToolResponse(createResult)

            const deleteResult = await deleteTool.handler(context, {
                id: createdDashboard.id,
            })
            const deleteResponse = parseToolResponse(deleteResult)

            expect(deleteResponse.deleted).toBe(true)
        })
    })

    describe('Dashboard workflow', () => {
        it('should support full CRUD workflow', async () => {
            const createTool = getToolByName('dashboard-create')
            const updateTool = getToolByName('dashboard-update')
            const getOneTool = getToolByName('dashboard-get')
            const deleteTool = getToolByName('dashboard-delete')

            const createResult = await createTool.handler(context, {
                name: generateUniqueKey('Workflow Test Dashboard'),
                description: 'Testing full workflow',
                pinned: false,
            })
            const createdDashboard = parseToolResponse(createResult)

            const getResult = await getOneTool.handler(context, { id: createdDashboard.id })
            const retrievedDashboard = parseToolResponse(getResult)
            expect(retrievedDashboard.id).toBe(createdDashboard.id)

            const updateResult = await updateTool.handler(context, {
                id: createdDashboard.id,
                name: 'Updated Workflow Dashboard',
                description: 'Updated workflow description',
            })
            const updatedDashboard = parseToolResponse(updateResult)
            expect(updatedDashboard.name).toBe('Updated Workflow Dashboard')

            const deleteResult = await deleteTool.handler(context, {
                id: createdDashboard.id,
            })
            const deleteResponse = parseToolResponse(deleteResult)
            expect(deleteResponse.deleted).toBe(true)
        })
    })

    describe('dashboard-reorder-tiles tool', () => {
        const createDashboard = getToolByName('dashboard-create')
        const createInsight = createInsightTool()
        const addInsight = getToolByName('add-insight-to-dashboard')
        const reorderTiles = getToolByName('dashboard-reorder-tiles')
        const getOneDashboard = getToolByName('dashboard-get')
        const deleteDashboard = getToolByName('dashboard-delete')

        it('should reorder tiles on a dashboard', async () => {
            // Create a dashboard
            const dashboardResult = await createDashboard.handler(context, {
                name: generateUniqueKey('Reorder Test Dashboard'),
                description: 'Dashboard for testing tile reordering',
                pinned: false,
            })
            const dashboard = parseToolResponse(dashboardResult)
            createdResources.dashboards.push(dashboard.id)

            // Create two insights
            const insight1Result = await createInsight.handler(context, {
                data: {
                    name: generateUniqueKey('Insight 1'),
                    description: 'First insight',
                    query: SAMPLE_HOGQL_QUERIES.pageviews,
                    favorited: false,
                },
            })
            const insight1 = parseToolResponse(insight1Result)
            createdResources.insights.push(insight1.id)

            const insight2Result = await createInsight.handler(context, {
                data: {
                    name: generateUniqueKey('Insight 2'),
                    description: 'Second insight',
                    query: SAMPLE_HOGQL_QUERIES.topEvents,
                    favorited: false,
                },
            })
            const insight2 = parseToolResponse(insight2Result)
            createdResources.insights.push(insight2.id)

            // Add insights to dashboard using numeric IDs
            await addInsight.handler(context, {
                id: dashboard.id,
                insight_id: insight1.id,
            })
            await addInsight.handler(context, {
                id: dashboard.id,
                insight_id: insight2.id,
            })

            // Get the dashboard to see the tile IDs
            const dashboardWithTilesResult = await getOneDashboard.handler(context, {
                id: dashboard.id,
            })
            const dashboardWithTiles = parseToolResponse(dashboardWithTilesResult)

            expect(dashboardWithTiles.tiles).toBeTruthy()
            expect(dashboardWithTiles.tiles.length).toBeGreaterThanOrEqual(2)

            // Get the tile IDs (filter out null tiles)
            const tileIds = dashboardWithTiles.tiles
                .filter((tile: any) => tile !== null && tile.id !== undefined)
                .map((tile: any) => tile.id)

            // Reorder tiles (reverse the order)
            const reversedTileOrder = [...tileIds].reverse()
            const reorderResult = await reorderTiles.handler(context, {
                id: dashboard.id,
                tile_order: reversedTileOrder,
            })
            const reorderResponse = parseToolResponse(reorderResult)

            expect(reorderResponse.id).toBe(dashboard.id)
            expect(reorderResponse._posthogUrl).toContain('/dashboard/')

            // Clean up
            await deleteDashboard.handler(context, { id: dashboard.id })
            createdResources.dashboards = createdResources.dashboards.filter((id) => id !== dashboard.id)
        })
    })
})
