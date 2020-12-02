import { expect } from 'aria-mocha'
import { datediff } from './date-diff'

describe('date-diff', () => {

  it('should get the difference of the date', () => {
    const startDate = new Date('01-Feb-20'), endDate = new Date('15-Feb-20')

    const diff = datediff(startDate, endDate)  
    expect(diff).equal(14)
  })

  it('should get the difference of the date for 1 month', () => {
    const startDate = new Date('15-Feb-20'), endDate = new Date('15-March-20')
    
    const diff = datediff(startDate, endDate)  
    expect(diff).equal(29)
  })

})