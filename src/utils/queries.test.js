import axios from 'axios'
import moxios from 'moxios'
import { getUser } from '../utils/queries'

describe('getUser query', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    it('should return a userObject', () => {
        const userObject = {
            id: 1,
            username: 'oliver_queen',
            rank: 150000,
            wallet_balance: 1500,
            available_plan: [
                {
                    id: 'bronze1',
                    plan: 'Bronze (N150.00)',
                    lives_left: 4,
                    plays: 3,
                },
                {
                    id: 'bronze2',
                    plan: 'Bronze (N250.00)',
                    lives_left: 4,
                    plays: 6,
                },
                {
                    id: 'bronze3',
                    plan: 'Bronze (N450.00)',
                    lives_left: 4,
                    plays: 9,
                },
            ],
        }
        // mockAxios.get = jest.fn().mockResolvedValue()
        const user = getUser()
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            return request
                .respondWith({
                    data: {
                        message: 'success',
                        data: {
                            userObject,
                        },
                    },
                })
                .then((res) => {
                    const result = res.data.data.userObject
                    expect(result).toBeTruthy()
                    expect(result.username).toBe('oliver_queen')
                })
        })
    })
})
