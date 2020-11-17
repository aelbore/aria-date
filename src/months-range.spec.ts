import { expect } from 'aria-mocha'
import { getMonths } from './months-range'
import { formatter } from './formatter'

describe('getMonths', () => {

  const asserts = (months, expected) => {
    months.forEach((month, index) => {
      const current = formatter(new Date(month)).format('DD-MMM-YY')
      const dateExpected = formatter(new Date(expected[index])).format('DD-MMM-YY')
      expect(current).equal(dateExpected)
    })
  }

  it('should get the range of months with in a year.', () => {
    const expected = [
      '01-Jan-20', 
      '01-Feb-20',
      '01-Mar-20', 
      '01-Apr-20',
      '01-May-20', 
      '01-Jun-20',
      '01-Jul-20', 
      '01-Aug-20',
      '01-Sep-20'
    ]

    const months = getMonths(9, new Date('01-Jan-2020'))

    expect(months.length).equal(expected.length)
    asserts(months, expected)
  })

  it('should get the range of the months with current year and next year', () => {
    const expected = [ '01-Nov-20', '01-Dec-20', '01-Jan-21' ]

    const months = getMonths(3, new Date('01-Nov-2020'))

    expect(months.length).equal(expected.length)
    asserts(months, expected)
  })

  it('should get the range of the months with default to current month.', () => {
    const expected = [ '01-Nov-20', '01-Dec-20', '01-Jan-21' ]

    const months = getMonths(3)

    expect(months.length).equal(expected.length)
    asserts(months, expected)
  })
  
})