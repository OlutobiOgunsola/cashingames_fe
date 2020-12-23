import Footer from './Footer'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Footer component', () => {
    it('renders without crashing', () => {
        const HeaderWrapper = shallow(<Footer />)

        expect(toJSON(HeaderWrapper)).toMatchSnapshot()
    })
    it('should render the graphic', () => {
        const HeaderWrapper = mount(<Footer />)

        expect(HeaderWrapper.find('#toodles')).toBeTruthy()
    })
})
