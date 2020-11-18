import { expect } from 'aria-mocha'

import { getDay, getLastDate } from './days'
import { formatter } from './formatter'

describe('getDays', () => {

  it('should get the day of the date (long)', () => {
    const date = new Date('20-Nov-2020')

    const result = getDay(date.getDay(), 'long')
    expect(result).equal('Friday')
  })

  it('should get the day of the date (short)', () => {
    const date = new Date('20-Nov-2020')

    const result = getDay(date.getDay())
    expect(result).equal('Fri')
  })

})


describe('getLastDate', () => {

  it('should get the last Date of the month default to current date', () => {
    const date = new Date()
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    const result = getLastDate()
    expect(formatter(result).format('DD-MM-YY')).equal(formatter(lastDate).format('DD-MM-YY'))
  })

  it('should get the last Date of the month', () => {
    const date = new Date('15-Nov-2020')

    const result = getLastDate(date)
    expect(formatter(result).format('DD-MMM-YY')).equal('30-Nov-20')
  })

})