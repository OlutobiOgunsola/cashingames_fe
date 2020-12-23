import Table from './Table'
import axios from 'axios'
import moxios from 'moxios'
import { shallow, mount } from 'enzyme'

describe('Table item', () => {
    it('renders a table', () => {
        const data = [],
            headers = []
        const TableWrapper = mount(<Table data={data} headers={headers} />)

        expect(TableWrapper.find('table')).toBeTruthy()

        TableWrapper.unmount()
    })

    it('renders an error paragraph if headers lenght !== table row data length', () => {
        // data shape of 2
        const data = [
            {
                id: 1,
                data: 1,
            },
            {
                id: 2,
                data: 2,
            },
        ]

        // header shape of 1 3
        const headers = ['1', '2', '3']

        const TableWrapper = mount(<Table data={data} headers={headers} />)
        expect(TableWrapper.find('#error-note')).toBeTruthy()

        TableWrapper.unmount()
    })

    it('should render all headers and rows', () => {
        const data = [
            { id: 1, data: 1 },
            { id: 2, data: 2 },
            { id: 3, data: 3 },
        ]
        const headers = ['id', 'data']

        const TableWrapper = mount(<Table data={data} headers={headers} />)

        expect(TableWrapper.find('.table-header')).toHaveLength(2)
        expect(TableWrapper.find('.table-row')).toHaveLength(3)
        TableWrapper.unmount()
    })
})
