import { expect } from '@qoi/test'
import { formatter } from '../src/formatter'

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
    expect(format.format('ddd, MMM YY')).equal('Sun, Nov 20')
    expect(format.format('dddd, MMM YY')).equal('Sunday, Nov 20')
    expect(format.format('DD MMM, ddd')).equal('01 Nov, Sun')
    expect(format.format('DD MMM, dddd')).equal('01 Nov, Sunday')
  })

  it('should format date with time', () => {
    const date = new Date('01-Jan-2020 10:01:11')
    const format = formatter(date)

    expect(format.format('yyyy-MM-dd HH:mm:ss')).equal(`2020-01-01 10:01:11`)
  })

  it('should format current date', () => {
    const currentDate = new Date()
    const date = formatter().format('DD-MMM-YYYY')
    
    expect(date).equal(formatter(currentDate).format('DD-MMM-YYYY'))
  })

  it('should format date string', () => {
    const date = '01-Nov-2020'

    const format = formatter(date)
    
    expect(format.format('DD-MMM-YYYY')).equal('01-Nov-2020')
    expect(format.format('DD-MMM-YY')).equal('01-Nov-20')
    expect(format.format('DD-MMM')).equal('01-Nov')
    expect(format.format('DD')).equal('01') 
    expect(format.format('MMM')).equal('Nov')
    expect(format.format('YYYY')).equal('2020')
    expect(format.format('MMM YYYY')).equal('Nov 2020')
    expect(format.format('MMM YY')).equal('Nov 20')
    expect(format.format('ddd, MMM YY')).equal('Sun, Nov 20')
    expect(format.format('dddd, MMM YY')).equal('Sunday, Nov 20')
    expect(format.format('DD MMM, ddd')).equal('01 Nov, Sun')
    expect(format.format('DD MMM, dddd')).equal('01 Nov, Sunday')   
  })

  it('should format date number or time', () => {
    const date = new Date('01-Nov-2020').getTime()

    const format = formatter(date)
    
    expect(format.format('DD-MMM-YYYY')).equal('01-Nov-2020')
    expect(format.format('DD-MMM-YY')).equal('01-Nov-20')
    expect(format.format('DD-MMM')).equal('01-Nov')
    expect(format.format('DD')).equal('01') 
    expect(format.format('MMM')).equal('Nov')
    expect(format.format('YYYY')).equal('2020')
    expect(format.format('MMM YYYY')).equal('Nov 2020')
    expect(format.format('MMM YY')).equal('Nov 20')
    expect(format.format('ddd, MMM YY')).equal('Sun, Nov 20')
    expect(format.format('dddd, MMM YY')).equal('Sunday, Nov 20')
    expect(format.format('DD MMM, ddd')).equal('01 Nov, Sun')
    expect(format.format('DD MMM, dddd')).equal('01 Nov, Sunday')   
  })

})