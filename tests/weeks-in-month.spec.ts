import { expect } from 'aria-mocha'

import { WeekRange } from '../src/types'
import { getWeeksInMonth } from '../src/weeks-in-month'

describe('getWeeksInMonth', () => {

  const asserts = (results: WeekRange[], expected: WeekRange[]) => {
    expect(results.length).equal(expected.length)
    results.forEach((result, index) => {
      expect(result.start).equal(expected[index].start)
      expect(result.end).equal(expected[index].end)
    })
  }

  it('should get the weeks range when Month is January 2020 with 31 days', () => {
    const date = new Date('14-Jan-2020')

    const expected: WeekRange[] = [
      { start: 1, end: 5 },
      { start: 6, end: 12 },
      { start: 13, end: 19 },
      { start: 20, end: 26 },
      { start: 27, end: 31 }
    ]

    const results = getWeeksInMonth(date)

    asserts(results, expected)
  })

  it('should get the weeks range when Month is Feb 2020 with 29 days', () => {
    const date = new Date('01-Feb-2020')

    const expected = [
      { start: 1, end: 2 },
      { start: 3, end: 9 },
      { start: 10, end: 16 },
      { start: 17, end: 23 },
      { start: 24, end: 29 }
    ]

    const results = getWeeksInMonth(date)

    asserts(results, expected)
  })

  it('should get the weeks range when Month is Feb 2017 with 28 days', () => {
    const date = new Date('10-Feb-2017')

    const expected = [
      { start: 1, end: 5 },
      { start: 6, end: 12 },
      { start: 13, end: 19 },
      { start: 20, end: 26 },
      { start: 27, end: 28 }
    ]

    const results = getWeeksInMonth(date)

    asserts(results, expected)
  })

  it('should get the weeks range when Month is Nov 2020 with 30 days', () => {
    const date = new Date('12-Nov-2020')

    const expected = [
      { start: 1, end: 1 },
      { start: 2, end: 8 },
      { start: 9, end: 15 },
      { start: 16, end: 22 },
      { start: 23, end: 29 },
      { start: 30, end: 30 }
    ]

    const results = getWeeksInMonth(date)
    
    asserts(results, expected)
  })

})