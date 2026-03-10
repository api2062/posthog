import { render } from '@testing-library/react'

import { DashboardPlacement, DashboardTile, QueryBasedInsightModel, UserBasicType } from '~/types'

import { TextCard } from './TextCard'

const makeTextTile = (body: string): DashboardTile<QueryBasedInsightModel> => {
    return {
        id: 1,
        text: {
            body,
            last_modified_by: null as unknown as UserBasicType,
            last_modified_at: '2022-04-01 12:24:36',
        },
        layouts: {},
        color: null,
    }
}

describe('TextCard', () => {
    it('renders eight handles when showResizeHandles=true', () => {
        const { container } = render(
            <TextCard
                textTile={makeTextTile('handles everywhere')}
                placement={DashboardPlacement.Dashboard}
                showResizeHandles={true}
            />
        )

        const handles = container.querySelectorAll('.handle')
        expect(handles.length).toBe(8)

        const horizontalHandles = container.querySelectorAll('.handle.horizontal')
        const verticalHandles = container.querySelectorAll('.handle.vertical')
        const cornerHandles = container.querySelectorAll('.handle.corner')

        expect(horizontalHandles.length).toBe(2)
        expect(verticalHandles.length).toBe(2)
        expect(cornerHandles.length).toBe(4)
    })
})
