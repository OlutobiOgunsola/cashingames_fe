// import { Shallow, Mount } from 'enzyme'
import Dashboard from './Dashboard'
import React from 'react'
import { shallow, render, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJSON from 'enzyme-to-json'

import mockAxios from 'jest-mock-axios'
// import * as axios from 'axios'

import { ThemeProvider } from 'styled-components'

import { getUser } from '../../utils/queries'
import Theme from '../../assets/theme/'

// mock axios canceltoken
// mockAxios.get = jest.fn()

// mockAxios.cancelToken = cancelToken

// jest.mock('axios', () => {
//     return {
//         CancelToken: {
//             source: jest.fn(() => {
//                 return {
//                     token: '',
//                 }
//             }),
//         },
//         get: jest.fn(),
//     }
// })

describe('Cashingames dashboard', () => {
    afterEach(() => {
        // cleaning up
        // mockAxios.reset()
    })

    it('renders dashboard successfully', () => {
        const DashWrapper = shallow(<Dashboard />)

        expect(toJSON(DashWrapper)).toMatchSnapshot()
    })

    it('should render a header successfully', () => {
        const DashWrapper = mount(
            <ThemeProvider theme={Theme}>
                <Dashboard />
            </ThemeProvider>
        )
        expect(DashWrapper.find('h1').text()).toBe('Dashboard')
    })

    it('should render a main body', () => {
        const DashWrapper = mount(
            <ThemeProvider theme={Theme}>
                <Dashboard />
            </ThemeProvider>
        )
        expect(DashWrapper.find('main')).toBeTruthy()
    })

    it('getUser should make api call', () => {
        mockAxios.get.mockResolvedValue([
            {
                data: {
                    message: 'success',
                    data: {
                        userObject: {
                            id: 1,
                            username: 'oliver_queen',
                        },
                    },
                },
            },
        ])

        const setUser = jest.fn()

        const DashWrapper = mount(
            <ThemeProvider theme={Theme}>
                <Dashboard />
            </ThemeProvider>
        )
        const updateState = jest.spyOn(React, 'useState')

        updateState.mockImplementation((user) => [user, setUser])

        expect(setUser).toHaveBeenCalled()
    })

    it.todo('should render username correctly')
    // it.todo('should render username correctly')
    // it.todo('should render username correctly')
    // it.todo('should render username correctly')
    // it.todo('should render username correctly')
})
