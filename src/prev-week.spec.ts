import { expect } from 'aria-mocha'
import { getCurrentWeek } from './current-week'
import { formatter } from './formatter'

import { getPreviousWeek, getPreviousWeeks, PreviousWeek } from './prev-week'

describe('getPreviousWeek', () => {

  const asserts = (prevWeek: PreviousWeek, expected: PreviousWeek) => {
    expect(formatter(prevWeek.currentWeek.date).format('DD-MMM-YY'))
    .equal(formatter(expected.currentWeek.date).format('DD-MMM-YY'))
    expect(prevWeek.dates.length).equal(expected.dates.length)
    expect(prevWeek.currentWeek.range.start).equal(expected.currentWeek.range.start)
    expect(prevWeek.currentWeek.range.end).equal(expected.currentWeek.range.end)
    expected.dates.forEach(value => {
      const item = prevWeek.dates.find(date => date === value)
      expect(item).toBeDefined()
    })
  }

  it('should display prev weeks default options', () => {
    const date = new Date('04-Jan-21')

    const currentWeek = getCurrentWeek(date)
    const prevWeeks = getPreviousWeek(currentWeek)
    const prevWeek = prevWeeks as PreviousWeek

    const expected: PreviousWeek = {
      currentWeek: {
        date: new Date('03-Jan-21'),
        week: 1,
        range: { start: 1, end: 3 }
      },
      dates: [ '01-Jan-2021', '02-Jan-2021', '03-Jan-2021' ]
    }

    expect(Array.isArray(prevWeeks)).toBeFalse()
    asserts(prevWeek, expected)
  })

  it('should display prev weeks with options', () => {
    const date = new Date('04-Jan-21')

    const currentWeek = getCurrentWeek(date)
    const prevWeeks = getPreviousWeek(currentWeek, { datesInPrevMonth: true })

    const expected: PreviousWeek[] = [
      {
        currentWeek: {
          date: new Date('03-Jan-21'),
          week: 1,
          range: { start: 1, end: 3 }
        },
        dates: [ '01-Jan-2021', '02-Jan-2021', '03-Jan-2021' ]
      },
      {
        currentWeek: {
          date: new Date('28-Dec-20'),
          week: 1,
          range: { start: 28, end: 31 }
        },
        dates: [ '28-Dec-2020', '29-Dec-2020', '30-Dec-2020', '31-Dec-2020' ]
      }
    ]

    expect(Array.isArray(prevWeeks)).toBeTrue()
    asserts(prevWeeks[0], expected[0])
    asserts(prevWeeks[1], expected[1])
  })

  it('should diplay list of prev weeks with range', () => {
    const date = new Date()

    const previousWeeks = getPreviousWeeks(date, { range: 4, datesInPrevMonth: true })
    console.log(previousWeeks)
  })

})