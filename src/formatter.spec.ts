import { expect } from 'aria-mocha'
import { formatter } from './formatter'

describe('formatter', () => {

  it('should format date', () => {
    const date = new Date('01-Nov-2020')

    const format = formatter(date)
    
    expect(format.format('DD-MMM-YYYY')).equal('01-Nov-2020')
    expect(format.format('DD-MMM-YY')).equal('01-Nov-20')
    expect(format.format('DD-MMM')).equal('01-Nov')
    expect(format.format('DD')).equal('01') 
    expect(format.format('MMM')).equal('Nov')
    expect(format.format('YYYY')).equal('2020')
    expect(format.format('MMM YYYY')).equal('Nov 2020')
    expect(format.format('MMM YY')).equal('Nov 20')
  })

  it('should format current date', () => {
    const currentDate = new Date()
    const date = formatter().format('DD-MMM-YYYY')
    
    expect(date).equal(formatter(currentDate).format('DD-MMM-YYYY'))
  })

})