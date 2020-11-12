
import { expect } from 'aria-mocha'
import { getWeeksInMonth } from './index'

describe('getWeeksInMonth', () => {

  it('should get the weeks range in the given month & year', () => {
    const date = new Date(2020, 11, 1)

    const expected = [
      { start: 1, end: 1 },
      { start: 2, end: 8 },
      { start: 9, end: 15 },
      { start: 16, end: 22 },
      { start: 23, end: 29 },
      { start: 30, end: 30 }
    ]

    const results = getWeeksInMonth(date.getMonth(), date.getFullYear())
    
    expect(results.length).equal(expected.length)
    results.forEach((result, index) => {
      expect(result.start).equal(expected[index].start)
      expect(result.end).equal(expected[index].end)
    })
  })

})