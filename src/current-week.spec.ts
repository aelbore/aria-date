import { expect } from 'aria-mocha'

import { getCurrentWeek, getCurrentWeekDates } from './current-week'
import { CurrentWeek, WeekRange } from './types'

describe('getCurrentWeek', () => {
  const weeks: WeekRange[] = [
    { start: 1, end: 1 },
    { start: 2, end: 8 },
    { start: 9, end: 15 },
    { start: 16, end: 22 },
    { start: 23, end: 29 },
    { start: 30, end: 30 }
  ]


  it('should get the current week', () => {
    const date = new Date('02-Nov-2020')

    const currentWeek = getCurrentWeek(date)

    expect(currentWeek.week).equal(2)
    expect(currentWeek.range.start).equal(2)
    expect(currentWeek.range.end).equal(8)
  })

  it('should get the current week with weeks range', () => {
    const date = new Date('10-Nov-2020')


    const expected: CurrentWeek = {
      date,
      week: 3,
      range: { start: 9, end: 15 }
    }

    const currentWeek = getCurrentWeek(date, weeks)
    
    expect(currentWeek.week).equal(expected.week)
    expect(currentWeek.range.start).equal(expected.range.start)
    expect(currentWeek.range.end).equal(expected.range.end)
  })

  it('should get the current week dates', () => {
    const date = new Date('10-Nov-2020')

    const expected: string[] = [
      '09-Nov-2020',
      '10-Nov-2020',
      '11-Nov-2020',
      '12-Nov-2020',
      '13-Nov-2020',
      '14-Nov-2020',
      '15-Nov-2020',
    ]

    const currentWeek = getCurrentWeek(date, weeks)
    const currentWeekDates = getCurrentWeekDates(currentWeek)

    expect(currentWeekDates.length).equal(7)
    expected.forEach(value => {
      const item = currentWeekDates.find(currentDate => currentDate === value)
      expect(item).toBeDefined()
    })
  })

})