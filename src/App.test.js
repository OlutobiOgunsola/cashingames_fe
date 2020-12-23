import App from './App'
import { shallow } from 'enzyme'

describe('Cashingames Main Application', () => {
    it('renders app without crashing', () => {
        const AppWrapper = shallow(<App />)
        expect(AppWrapper).toBeTruthy()
    })
})
