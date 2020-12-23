import { mount } from 'enzyme'
import LeaderboardTable from './LeaderboardTable'
import toJSON from 'enzyme-to-json'

describe('Leaderboard component', () => {
    it('renders without crashing', () => {
        const data = []
        const headers = []
        const LWrapper = mount(
            <LeaderboardTable data={data} headers={headers} />
        )

        expect(toJSON(LWrapper)).toMatchSnapshot()
        LWrapper.unmount()
    })
    it('renders a table', () => {
        const data = [
            {
                id: 1,
                name: 'Taye',
            },
            {
                id: 2,
                name: 'Kehinde',
            },
        ]

        const headers = ['ID', 'NAME']

        const LWrapper = mount(
            <LeaderboardTable data={data} headers={headers} />
        )

        expect(LWrapper.find('#table-container')).toBeTruthy()

        LWrapper.unmount()
    })
    it('should render child with data props', () => {})
})
