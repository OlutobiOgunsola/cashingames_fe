import Header from './Header'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Header component', () => {
    it('renders without crashing', () => {
        const HeaderWrapper = shallow(<Header />)

        expect(toJSON(HeaderWrapper)).toMatchSnapshot()
    })
    it('should render a logo', () => {
        const HeaderWrapper = mount(<Header />)

        expect(HeaderWrapper.find('.logo')).toBeTruthy()
    })

    it('should render a modal when nav button clicked', () => {
        const theme = {
            mixins: {
                flexMixin: jest.fn((f) => f()),
            },
        }
        const HeaderWrapper = mount(<Header theme={theme} />)

        HeaderWrapper.find('#hamburger').simulate('click')
        expect(HeaderWrapper.find('.modal-menu')).toBeTruthy()
    })
    it('should remove a modal when nav button clicked again', () => {
        const theme = {
            mixins: {
                flexMixin: jest.fn((f) => f()),
            },
        }
        const HeaderWrapper = mount(<Header theme={theme} />)

        HeaderWrapper.find('#hamburger').simulate('click')
        HeaderWrapper.find('#hamburger').simulate('click')
        expect(HeaderWrapper.find('.modal-menu')).toEqual({})
    })
})
