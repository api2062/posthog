/**
 * Auto-generated from the Django backend OpenAPI schema.
 * MCP service uses these Zod schemas for generated tool handlers.
 * To regenerate: hogli build:openapi
 *
 * PostHog API - MCP 39 ops
 * OpenAPI spec version: 1.0.0
 */
import * as zod from 'zod'

/**
 * @deprecated
 */
export const EnvironmentsDashboardsListParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsListQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
    limit: zod.number().optional().describe('Number of results to return per page.'),
    offset: zod.number().optional().describe('The initial index from which to return the results.'),
})

export const environmentsDashboardsListResponseResultsItemCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsListResponseResultsItemCreatedByOneFirstNameMax = 150

export const environmentsDashboardsListResponseResultsItemCreatedByOneLastNameMax = 150

export const environmentsDashboardsListResponseResultsItemCreatedByOneEmailMax = 254

export const EnvironmentsDashboardsListResponse = zod.object({
    count: zod.number(),
    next: zod.string().url().nullish(),
    previous: zod.string().url().nullish(),
    results: zod.array(
        zod
            .object({
                id: zod.number(),
                name: zod.string().nullable().describe('Name of the dashboard.'),
                description: zod.string().describe('Description of the dashboard.'),
                pinned: zod.boolean().describe('Whether the dashboard is pinned to the top of the list.'),
                created_at: zod.string().datetime({}),
                created_by: zod.object({
                    id: zod.number(),
                    uuid: zod.string(),
                    distinct_id: zod
                        .string()
                        .max(environmentsDashboardsListResponseResultsItemCreatedByOneDistinctIdMax)
                        .nullish(),
                    first_name: zod
                        .string()
                        .max(environmentsDashboardsListResponseResultsItemCreatedByOneFirstNameMax)
                        .optional(),
                    last_name: zod
                        .string()
                        .max(environmentsDashboardsListResponseResultsItemCreatedByOneLastNameMax)
                        .optional(),
                    email: zod.string().email().max(environmentsDashboardsListResponseResultsItemCreatedByOneEmailMax),
                    is_email_verified: zod.boolean().nullish(),
                    hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
                    role_at_organization: zod
                        .union([
                            zod
                                .enum([
                                    'engineering',
                                    'data',
                                    'product',
                                    'founder',
                                    'leadership',
                                    'marketing',
                                    'sales',
                                    'other',
                                ])
                                .describe(
                                    '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                                ),
                            zod.enum(['']),
                            zod.literal(null),
                        ])
                        .nullish(),
                }),
                last_accessed_at: zod.string().datetime({}).nullable(),
                last_viewed_at: zod.string().datetime({}).nullable(),
                is_shared: zod.boolean(),
                deleted: zod.boolean(),
                creation_mode: zod
                    .enum(['default', 'template', 'duplicate', 'unlisted'])
                    .describe(
                        '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
                    ),
                tags: zod.array(zod.unknown()).optional(),
                restriction_level: zod
                    .union([zod.literal(21), zod.literal(37)])
                    .describe(
                        '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
                    )
                    .describe(
                        'Controls who can edit the dashboard.\n\n* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
                    ),
                effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
                effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
                user_access_level: zod
                    .string()
                    .nullable()
                    .describe('The effective access level the user has for this object'),
                access_control_version: zod.string(),
                last_refresh: zod.string().datetime({}).nullable(),
                team_id: zod.number(),
            })
            .describe('Serializer mixin that handles tags for objects.')
    ),
})

/**
 * @deprecated
 */
export const EnvironmentsDashboardsCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsCreateBodyNameMax = 400

export const environmentsDashboardsCreateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsCreateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * @deprecated
 */
export const EnvironmentsDashboardsSharingListParams = zod.object({
    dashboard_id: zod.number(),
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsSharingListResponseItem = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})
export const EnvironmentsDashboardsSharingListResponse = zod.array(EnvironmentsDashboardsSharingListResponseItem)

/**
 * Create a new password for the sharing configuration.
 * @deprecated
 */
export const EnvironmentsDashboardsSharingPasswordsCreateParams = zod.object({
    dashboard_id: zod.number(),
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsSharingPasswordsCreateBody = zod.object({
    enabled: zod.boolean().optional(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
})

export const EnvironmentsDashboardsSharingPasswordsCreateResponse = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})

/**
 * Delete a password from the sharing configuration.
 * @deprecated
 */
export const EnvironmentsDashboardsSharingPasswordsDestroyParams = zod.object({
    dashboard_id: zod.number(),
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    password_id: zod.string(),
})

/**
 * @deprecated
 */
export const EnvironmentsDashboardsSharingRefreshCreateParams = zod.object({
    dashboard_id: zod.number(),
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsSharingRefreshCreateBody = zod.object({
    enabled: zod.boolean().optional(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
})

export const EnvironmentsDashboardsSharingRefreshCreateResponse = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})

/**
 * @deprecated
 */
export const EnvironmentsDashboardsRetrieveParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsRetrieveQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsRetrieveResponseNameMax = 400

export const environmentsDashboardsRetrieveResponseCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsRetrieveResponseCreatedByOneFirstNameMax = 150

export const environmentsDashboardsRetrieveResponseCreatedByOneLastNameMax = 150

export const environmentsDashboardsRetrieveResponseCreatedByOneEmailMax = 254

export const environmentsDashboardsRetrieveResponseDeleteInsightsDefault = false

export const EnvironmentsDashboardsRetrieveResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(environmentsDashboardsRetrieveResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(environmentsDashboardsRetrieveResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(environmentsDashboardsRetrieveResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(environmentsDashboardsRetrieveResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(environmentsDashboardsRetrieveResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsRetrieveResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * @deprecated
 */
export const EnvironmentsDashboardsUpdateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsUpdateBodyNameMax = 400

export const environmentsDashboardsUpdateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsUpdateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const environmentsDashboardsUpdateResponseNameMax = 400

export const environmentsDashboardsUpdateResponseCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsUpdateResponseCreatedByOneFirstNameMax = 150

export const environmentsDashboardsUpdateResponseCreatedByOneLastNameMax = 150

export const environmentsDashboardsUpdateResponseCreatedByOneEmailMax = 254

export const environmentsDashboardsUpdateResponseDeleteInsightsDefault = false

export const EnvironmentsDashboardsUpdateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(environmentsDashboardsUpdateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(environmentsDashboardsUpdateResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(environmentsDashboardsUpdateResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(environmentsDashboardsUpdateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(environmentsDashboardsUpdateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsUpdateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * @deprecated
 */
export const EnvironmentsDashboardsPartialUpdateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsPartialUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsPartialUpdateBodyNameMax = 400

export const environmentsDashboardsPartialUpdateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsPartialUpdateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsPartialUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsPartialUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const environmentsDashboardsPartialUpdateResponseNameMax = 400

export const environmentsDashboardsPartialUpdateResponseCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsPartialUpdateResponseCreatedByOneFirstNameMax = 150

export const environmentsDashboardsPartialUpdateResponseCreatedByOneLastNameMax = 150

export const environmentsDashboardsPartialUpdateResponseCreatedByOneEmailMax = 254

export const environmentsDashboardsPartialUpdateResponseDeleteInsightsDefault = false

export const EnvironmentsDashboardsPartialUpdateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(environmentsDashboardsPartialUpdateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod
                .string()
                .max(environmentsDashboardsPartialUpdateResponseCreatedByOneDistinctIdMax)
                .nullish(),
            first_name: zod
                .string()
                .max(environmentsDashboardsPartialUpdateResponseCreatedByOneFirstNameMax)
                .optional(),
            last_name: zod.string().max(environmentsDashboardsPartialUpdateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(environmentsDashboardsPartialUpdateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsPartialUpdateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 * @deprecated
 */
export const EnvironmentsDashboardsDestroyParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsDestroyQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

/**
 * @deprecated
 */
export const EnvironmentsDashboardsAddInsightCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsAddInsightCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const EnvironmentsDashboardsAddInsightCreateBody = zod.object({
    insight_id: zod.number().describe('ID of the insight to add to this dashboard.'),
})

export const environmentsDashboardsAddInsightCreateResponseNameMax = 400

export const environmentsDashboardsAddInsightCreateResponseCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsAddInsightCreateResponseCreatedByOneFirstNameMax = 150

export const environmentsDashboardsAddInsightCreateResponseCreatedByOneLastNameMax = 150

export const environmentsDashboardsAddInsightCreateResponseCreatedByOneEmailMax = 254

export const environmentsDashboardsAddInsightCreateResponseDeleteInsightsDefault = false

export const EnvironmentsDashboardsAddInsightCreateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(environmentsDashboardsAddInsightCreateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod
                .string()
                .max(environmentsDashboardsAddInsightCreateResponseCreatedByOneDistinctIdMax)
                .nullish(),
            first_name: zod
                .string()
                .max(environmentsDashboardsAddInsightCreateResponseCreatedByOneFirstNameMax)
                .optional(),
            last_name: zod
                .string()
                .max(environmentsDashboardsAddInsightCreateResponseCreatedByOneLastNameMax)
                .optional(),
            email: zod.string().email().max(environmentsDashboardsAddInsightCreateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsAddInsightCreateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Generate AI analysis comparing before/after dashboard refresh.
Expects cache_key in request body pointing to the stored 'before' state.
 * @deprecated
 */
export const EnvironmentsDashboardsAnalyzeRefreshResultCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsAnalyzeRefreshResultCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsAnalyzeRefreshResultCreateBodyNameMax = 400

export const environmentsDashboardsAnalyzeRefreshResultCreateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsAnalyzeRefreshResultCreateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsAnalyzeRefreshResultCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsAnalyzeRefreshResultCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * @deprecated
 */
export const EnvironmentsDashboardsMoveTilePartialUpdateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsMoveTilePartialUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsMoveTilePartialUpdateBodyNameMax = 400

export const environmentsDashboardsMoveTilePartialUpdateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsMoveTilePartialUpdateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsMoveTilePartialUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsMoveTilePartialUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * @deprecated
 */
export const EnvironmentsDashboardsReorderTilesCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsReorderTilesCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const EnvironmentsDashboardsReorderTilesCreateBody = zod.object({
    tile_order: zod
        .array(zod.number())
        .describe('Array of tile IDs in the desired display order (top to bottom, left to right).'),
})

export const environmentsDashboardsReorderTilesCreateResponseNameMax = 400

export const environmentsDashboardsReorderTilesCreateResponseCreatedByOneDistinctIdMax = 200

export const environmentsDashboardsReorderTilesCreateResponseCreatedByOneFirstNameMax = 150

export const environmentsDashboardsReorderTilesCreateResponseCreatedByOneLastNameMax = 150

export const environmentsDashboardsReorderTilesCreateResponseCreatedByOneEmailMax = 254

export const environmentsDashboardsReorderTilesCreateResponseDeleteInsightsDefault = false

export const EnvironmentsDashboardsReorderTilesCreateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(environmentsDashboardsReorderTilesCreateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod
                .string()
                .max(environmentsDashboardsReorderTilesCreateResponseCreatedByOneDistinctIdMax)
                .nullish(),
            first_name: zod
                .string()
                .max(environmentsDashboardsReorderTilesCreateResponseCreatedByOneFirstNameMax)
                .optional(),
            last_name: zod
                .string()
                .max(environmentsDashboardsReorderTilesCreateResponseCreatedByOneLastNameMax)
                .optional(),
            email: zod.string().email().max(environmentsDashboardsReorderTilesCreateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsReorderTilesCreateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Snapshot the current dashboard state (from cache) for AI analysis.
Returns a cache_key representing the 'before' state, to be used with analyze_refresh_result.
 * @deprecated
 */
export const EnvironmentsDashboardsSnapshotCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsSnapshotCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsSnapshotCreateBodyNameMax = 400

export const environmentsDashboardsSnapshotCreateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsSnapshotCreateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsSnapshotCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsSnapshotCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.
 * @deprecated
 */
export const EnvironmentsDashboardsStreamTilesRetrieveParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
})

export const EnvironmentsDashboardsStreamTilesRetrieveQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

/**
 * @deprecated
 */
export const EnvironmentsDashboardsCreateFromTemplateJsonCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsCreateFromTemplateJsonCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsCreateFromTemplateJsonCreateBodyNameMax = 400

export const environmentsDashboardsCreateFromTemplateJsonCreateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsCreateFromTemplateJsonCreateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsCreateFromTemplateJsonCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsCreateFromTemplateJsonCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Creates an unlisted dashboard from template by tag.
Enforces uniqueness (one per tag per team).
Returns 409 if unlisted dashboard with this tag already exists.
 * @deprecated
 */
export const EnvironmentsDashboardsCreateUnlistedDashboardCreateParams = zod.object({
    environment_id: zod.string().describe('Deprecated. Use /api/projects/{project_id}/ instead.'),
})

export const EnvironmentsDashboardsCreateUnlistedDashboardCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const environmentsDashboardsCreateUnlistedDashboardCreateBodyNameMax = 400

export const environmentsDashboardsCreateUnlistedDashboardCreateBodyDeleteInsightsDefault = false

export const EnvironmentsDashboardsCreateUnlistedDashboardCreateBody = zod
    .object({
        name: zod.string().max(environmentsDashboardsCreateUnlistedDashboardCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(environmentsDashboardsCreateUnlistedDashboardCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsCollaboratorsListParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const dashboardsCollaboratorsListResponseUserOneDistinctIdMax = 200

export const dashboardsCollaboratorsListResponseUserOneFirstNameMax = 150

export const dashboardsCollaboratorsListResponseUserOneLastNameMax = 150

export const dashboardsCollaboratorsListResponseUserOneEmailMax = 254

export const DashboardsCollaboratorsListResponseItem = zod.object({
    id: zod.string(),
    dashboard_id: zod.number(),
    user: zod.object({
        id: zod.number(),
        uuid: zod.string(),
        distinct_id: zod.string().max(dashboardsCollaboratorsListResponseUserOneDistinctIdMax).nullish(),
        first_name: zod.string().max(dashboardsCollaboratorsListResponseUserOneFirstNameMax).optional(),
        last_name: zod.string().max(dashboardsCollaboratorsListResponseUserOneLastNameMax).optional(),
        email: zod.string().email().max(dashboardsCollaboratorsListResponseUserOneEmailMax),
        is_email_verified: zod.boolean().nullish(),
        hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
        role_at_organization: zod
            .union([
                zod
                    .enum(['engineering', 'data', 'product', 'founder', 'leadership', 'marketing', 'sales', 'other'])
                    .describe(
                        '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                    ),
                zod.enum(['']),
                zod.literal(null),
            ])
            .nullish(),
    }),
    level: zod
        .union([zod.literal(21), zod.literal(37)])
        .describe('* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'),
    added_at: zod.string().datetime({}),
    updated_at: zod.string().datetime({}),
    user_uuid: zod.string(),
})
export const DashboardsCollaboratorsListResponse = zod.array(DashboardsCollaboratorsListResponseItem)

export const DashboardsCollaboratorsCreateParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsCollaboratorsCreateBody = zod.object({
    level: zod
        .union([zod.literal(21), zod.literal(37)])
        .describe('* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'),
    user_uuid: zod.string(),
})

export const DashboardsCollaboratorsDestroyParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
    user__uuid: zod.string(),
})

export const DashboardsListParams = zod.object({
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsListQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
    limit: zod.number().optional().describe('Number of results to return per page.'),
    offset: zod.number().optional().describe('The initial index from which to return the results.'),
})

export const dashboardsListResponseResultsItemCreatedByOneDistinctIdMax = 200

export const dashboardsListResponseResultsItemCreatedByOneFirstNameMax = 150

export const dashboardsListResponseResultsItemCreatedByOneLastNameMax = 150

export const dashboardsListResponseResultsItemCreatedByOneEmailMax = 254

export const DashboardsListResponse = zod.object({
    count: zod.number(),
    next: zod.string().url().nullish(),
    previous: zod.string().url().nullish(),
    results: zod.array(
        zod
            .object({
                id: zod.number(),
                name: zod.string().nullable().describe('Name of the dashboard.'),
                description: zod.string().describe('Description of the dashboard.'),
                pinned: zod.boolean().describe('Whether the dashboard is pinned to the top of the list.'),
                created_at: zod.string().datetime({}),
                created_by: zod.object({
                    id: zod.number(),
                    uuid: zod.string(),
                    distinct_id: zod.string().max(dashboardsListResponseResultsItemCreatedByOneDistinctIdMax).nullish(),
                    first_name: zod.string().max(dashboardsListResponseResultsItemCreatedByOneFirstNameMax).optional(),
                    last_name: zod.string().max(dashboardsListResponseResultsItemCreatedByOneLastNameMax).optional(),
                    email: zod.string().email().max(dashboardsListResponseResultsItemCreatedByOneEmailMax),
                    is_email_verified: zod.boolean().nullish(),
                    hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
                    role_at_organization: zod
                        .union([
                            zod
                                .enum([
                                    'engineering',
                                    'data',
                                    'product',
                                    'founder',
                                    'leadership',
                                    'marketing',
                                    'sales',
                                    'other',
                                ])
                                .describe(
                                    '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                                ),
                            zod.enum(['']),
                            zod.literal(null),
                        ])
                        .nullish(),
                }),
                last_accessed_at: zod.string().datetime({}).nullable(),
                last_viewed_at: zod.string().datetime({}).nullable(),
                is_shared: zod.boolean(),
                deleted: zod.boolean(),
                creation_mode: zod
                    .enum(['default', 'template', 'duplicate', 'unlisted'])
                    .describe(
                        '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
                    ),
                tags: zod.array(zod.unknown()).optional(),
                restriction_level: zod
                    .union([zod.literal(21), zod.literal(37)])
                    .describe(
                        '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
                    )
                    .describe(
                        'Controls who can edit the dashboard.\n\n* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
                    ),
                effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
                effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
                user_access_level: zod
                    .string()
                    .nullable()
                    .describe('The effective access level the user has for this object'),
                access_control_version: zod.string(),
                last_refresh: zod.string().datetime({}).nullable(),
                team_id: zod.number(),
            })
            .describe('Serializer mixin that handles tags for objects.')
    ),
})

export const DashboardsCreateParams = zod.object({
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsCreateBodyNameMax = 400

export const dashboardsCreateBodyDeleteInsightsDefault = false

export const DashboardsCreateBody = zod
    .object({
        name: zod.string().max(dashboardsCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsSharingListParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsSharingListResponseItem = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})
export const DashboardsSharingListResponse = zod.array(DashboardsSharingListResponseItem)

/**
 * Create a new password for the sharing configuration.
 */
export const DashboardsSharingPasswordsCreateParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsSharingPasswordsCreateBody = zod.object({
    enabled: zod.boolean().optional(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
})

export const DashboardsSharingPasswordsCreateResponse = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})

/**
 * Delete a password from the sharing configuration.
 */
export const DashboardsSharingPasswordsDestroyParams = zod.object({
    dashboard_id: zod.number(),
    password_id: zod.string(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsSharingRefreshCreateParams = zod.object({
    dashboard_id: zod.number(),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsSharingRefreshCreateBody = zod.object({
    enabled: zod.boolean().optional(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
})

export const DashboardsSharingRefreshCreateResponse = zod.object({
    created_at: zod.string().datetime({}),
    enabled: zod.boolean().optional(),
    access_token: zod.string().nullable(),
    settings: zod.unknown().nullish(),
    password_required: zod.boolean().optional(),
    share_passwords: zod.string(),
})

export const DashboardsRetrieveParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsRetrieveQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsRetrieveResponseNameMax = 400

export const dashboardsRetrieveResponseCreatedByOneDistinctIdMax = 200

export const dashboardsRetrieveResponseCreatedByOneFirstNameMax = 150

export const dashboardsRetrieveResponseCreatedByOneLastNameMax = 150

export const dashboardsRetrieveResponseCreatedByOneEmailMax = 254

export const dashboardsRetrieveResponseDeleteInsightsDefault = false

export const DashboardsRetrieveResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(dashboardsRetrieveResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(dashboardsRetrieveResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(dashboardsRetrieveResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(dashboardsRetrieveResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(dashboardsRetrieveResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsRetrieveResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsUpdateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsUpdateBodyNameMax = 400

export const dashboardsUpdateBodyDeleteInsightsDefault = false

export const DashboardsUpdateBody = zod
    .object({
        name: zod.string().max(dashboardsUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const dashboardsUpdateResponseNameMax = 400

export const dashboardsUpdateResponseCreatedByOneDistinctIdMax = 200

export const dashboardsUpdateResponseCreatedByOneFirstNameMax = 150

export const dashboardsUpdateResponseCreatedByOneLastNameMax = 150

export const dashboardsUpdateResponseCreatedByOneEmailMax = 254

export const dashboardsUpdateResponseDeleteInsightsDefault = false

export const DashboardsUpdateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(dashboardsUpdateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(dashboardsUpdateResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(dashboardsUpdateResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(dashboardsUpdateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(dashboardsUpdateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsUpdateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsPartialUpdateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsPartialUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsPartialUpdateBodyNameMax = 400

export const dashboardsPartialUpdateBodyDeleteInsightsDefault = false

export const DashboardsPartialUpdateBody = zod
    .object({
        name: zod.string().max(dashboardsPartialUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsPartialUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const dashboardsPartialUpdateResponseNameMax = 400

export const dashboardsPartialUpdateResponseCreatedByOneDistinctIdMax = 200

export const dashboardsPartialUpdateResponseCreatedByOneFirstNameMax = 150

export const dashboardsPartialUpdateResponseCreatedByOneLastNameMax = 150

export const dashboardsPartialUpdateResponseCreatedByOneEmailMax = 254

export const dashboardsPartialUpdateResponseDeleteInsightsDefault = false

export const DashboardsPartialUpdateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(dashboardsPartialUpdateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(dashboardsPartialUpdateResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(dashboardsPartialUpdateResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(dashboardsPartialUpdateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(dashboardsPartialUpdateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsPartialUpdateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 */
export const DashboardsDestroyParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsDestroyQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const DashboardsAddInsightCreateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsAddInsightCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const DashboardsAddInsightCreateBody = zod.object({
    insight_id: zod.number().describe('ID of the insight to add to this dashboard.'),
})

export const dashboardsAddInsightCreateResponseNameMax = 400

export const dashboardsAddInsightCreateResponseCreatedByOneDistinctIdMax = 200

export const dashboardsAddInsightCreateResponseCreatedByOneFirstNameMax = 150

export const dashboardsAddInsightCreateResponseCreatedByOneLastNameMax = 150

export const dashboardsAddInsightCreateResponseCreatedByOneEmailMax = 254

export const dashboardsAddInsightCreateResponseDeleteInsightsDefault = false

export const DashboardsAddInsightCreateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(dashboardsAddInsightCreateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(dashboardsAddInsightCreateResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(dashboardsAddInsightCreateResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(dashboardsAddInsightCreateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(dashboardsAddInsightCreateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsAddInsightCreateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Generate AI analysis comparing before/after dashboard refresh.
Expects cache_key in request body pointing to the stored 'before' state.
 */
export const DashboardsAnalyzeRefreshResultCreateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsAnalyzeRefreshResultCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsAnalyzeRefreshResultCreateBodyNameMax = 400

export const dashboardsAnalyzeRefreshResultCreateBodyDeleteInsightsDefault = false

export const DashboardsAnalyzeRefreshResultCreateBody = zod
    .object({
        name: zod.string().max(dashboardsAnalyzeRefreshResultCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsAnalyzeRefreshResultCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsMoveTilePartialUpdateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsMoveTilePartialUpdateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsMoveTilePartialUpdateBodyNameMax = 400

export const dashboardsMoveTilePartialUpdateBodyDeleteInsightsDefault = false

export const DashboardsMoveTilePartialUpdateBody = zod
    .object({
        name: zod.string().max(dashboardsMoveTilePartialUpdateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsMoveTilePartialUpdateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

export const DashboardsReorderTilesCreateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsReorderTilesCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const DashboardsReorderTilesCreateBody = zod.object({
    tile_order: zod
        .array(zod.number())
        .describe('Array of tile IDs in the desired display order (top to bottom, left to right).'),
})

export const dashboardsReorderTilesCreateResponseNameMax = 400

export const dashboardsReorderTilesCreateResponseCreatedByOneDistinctIdMax = 200

export const dashboardsReorderTilesCreateResponseCreatedByOneFirstNameMax = 150

export const dashboardsReorderTilesCreateResponseCreatedByOneLastNameMax = 150

export const dashboardsReorderTilesCreateResponseCreatedByOneEmailMax = 254

export const dashboardsReorderTilesCreateResponseDeleteInsightsDefault = false

export const DashboardsReorderTilesCreateResponse = zod
    .object({
        id: zod.number(),
        name: zod.string().max(dashboardsReorderTilesCreateResponseNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        created_at: zod.string().datetime({}),
        created_by: zod.object({
            id: zod.number(),
            uuid: zod.string(),
            distinct_id: zod.string().max(dashboardsReorderTilesCreateResponseCreatedByOneDistinctIdMax).nullish(),
            first_name: zod.string().max(dashboardsReorderTilesCreateResponseCreatedByOneFirstNameMax).optional(),
            last_name: zod.string().max(dashboardsReorderTilesCreateResponseCreatedByOneLastNameMax).optional(),
            email: zod.string().email().max(dashboardsReorderTilesCreateResponseCreatedByOneEmailMax),
            is_email_verified: zod.boolean().nullish(),
            hedgehog_config: zod.record(zod.string(), zod.unknown()).nullable(),
            role_at_organization: zod
                .union([
                    zod
                        .enum([
                            'engineering',
                            'data',
                            'product',
                            'founder',
                            'leadership',
                            'marketing',
                            'sales',
                            'other',
                        ])
                        .describe(
                            '* `engineering` - Engineering\n* `data` - Data\n* `product` - Product Management\n* `founder` - Founder\n* `leadership` - Leadership\n* `marketing` - Marketing\n* `sales` - Sales / Success\n* `other` - Other'
                        ),
                    zod.enum(['']),
                    zod.literal(null),
                ])
                .nullish(),
        }),
        last_accessed_at: zod.string().datetime({}).nullish(),
        last_viewed_at: zod.string().datetime({}).nullable(),
        is_shared: zod.boolean(),
        deleted: zod.boolean().optional(),
        creation_mode: zod
            .enum(['default', 'template', 'duplicate', 'unlisted'])
            .describe(
                '* `default` - Default\n* `template` - Template\n* `duplicate` - Duplicate\n* `unlisted` - Unlisted (product-embedded)'
            ),
        filters: zod.record(zod.string(), zod.unknown()),
        variables: zod.record(zod.string(), zod.unknown()).nullable(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        effective_restriction_level: zod.union([zod.literal(21), zod.literal(37)]),
        effective_privilege_level: zod.union([zod.literal(21), zod.literal(37)]),
        user_access_level: zod.string().nullable().describe('The effective access level the user has for this object'),
        access_control_version: zod.string(),
        last_refresh: zod.string().datetime({}).nullish(),
        persisted_filters: zod.record(zod.string(), zod.unknown()).nullable(),
        persisted_variables: zod.record(zod.string(), zod.unknown()).nullable(),
        team_id: zod.number(),
        tiles: zod.array(zod.record(zod.string(), zod.unknown())).nullable(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsReorderTilesCreateResponseDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Snapshot the current dashboard state (from cache) for AI analysis.
Returns a cache_key representing the 'before' state, to be used with analyze_refresh_result.
 */
export const DashboardsSnapshotCreateParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsSnapshotCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsSnapshotCreateBodyNameMax = 400

export const dashboardsSnapshotCreateBodyDeleteInsightsDefault = false

export const DashboardsSnapshotCreateBody = zod
    .object({
        name: zod.string().max(dashboardsSnapshotCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsSnapshotCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.
 */
export const DashboardsStreamTilesRetrieveParams = zod.object({
    id: zod.number().describe('A unique integer value identifying this dashboard.'),
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsStreamTilesRetrieveQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const DashboardsCreateFromTemplateJsonCreateParams = zod.object({
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsCreateFromTemplateJsonCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsCreateFromTemplateJsonCreateBodyNameMax = 400

export const dashboardsCreateFromTemplateJsonCreateBodyDeleteInsightsDefault = false

export const DashboardsCreateFromTemplateJsonCreateBody = zod
    .object({
        name: zod.string().max(dashboardsCreateFromTemplateJsonCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsCreateFromTemplateJsonCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')

/**
 * Creates an unlisted dashboard from template by tag.
Enforces uniqueness (one per tag per team).
Returns 409 if unlisted dashboard with this tag already exists.
 */
export const DashboardsCreateUnlistedDashboardCreateParams = zod.object({
    project_id: zod
        .string()
        .describe(
            "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/."
        ),
})

export const DashboardsCreateUnlistedDashboardCreateQueryParams = zod.object({
    format: zod.enum(['json', 'txt']).optional(),
})

export const dashboardsCreateUnlistedDashboardCreateBodyNameMax = 400

export const dashboardsCreateUnlistedDashboardCreateBodyDeleteInsightsDefault = false

export const DashboardsCreateUnlistedDashboardCreateBody = zod
    .object({
        name: zod.string().max(dashboardsCreateUnlistedDashboardCreateBodyNameMax).nullish(),
        description: zod.string().optional(),
        pinned: zod.boolean().optional(),
        last_accessed_at: zod.string().datetime({}).nullish(),
        deleted: zod.boolean().optional(),
        breakdown_colors: zod.unknown().optional().describe('Custom color mapping for breakdown values.'),
        data_color_theme_id: zod.number().nullish().describe('ID of the color theme used for chart visualizations.'),
        tags: zod.array(zod.unknown()).optional(),
        restriction_level: zod
            .union([zod.literal(21), zod.literal(37)])
            .describe(
                '* `21` - Everyone in the project can edit\n* `37` - Only those invited to this dashboard can edit'
            )
            .optional(),
        last_refresh: zod.string().datetime({}).nullish(),
        use_template: zod
            .string()
            .optional()
            .describe('Template key to create the dashboard from a predefined template.'),
        use_dashboard: zod.number().nullish().describe('ID of an existing dashboard to duplicate.'),
        delete_insights: zod
            .boolean()
            .default(dashboardsCreateUnlistedDashboardCreateBodyDeleteInsightsDefault)
            .describe('When deleting, also delete insights that are only on this dashboard.'),
        _create_in_folder: zod.string().optional(),
    })
    .describe('Serializer mixin that handles tags for objects.')
