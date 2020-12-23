import { getPropertiesFromObject } from './helpers'

describe('helper function getPropertiesFromObject', () => {
    it('should return an array of properties given an object', () => {
        const data = {
            id: 1,
            name: 'Tolulope',
            location: 'Lagos',
        }

        const result = getPropertiesFromObject(data)
        expect(result).toEqual([1, 'Tolulope', 'Lagos'])
    })
})
