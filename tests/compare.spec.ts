import { expect } from 'aria-mocha'
import { compare } from '../src/compare'

describe('compare', () => {

  it('should compare isSame', () => {
    const date = new Date('05-Jan-21')
    
    expect(compare(date).isSame('05-Jan-21')).toBeTrue() 
    expect(compare(date).isSame('04-Jan-21')).toBeFalse() 
    expect(compare(date).isSame('06-Jan-21')).toBeFalse() 
    expect(compare(date).isSame(new Date('05-Jan-21'))).toBeTrue() 
    expect(compare(date).isSame(new Date('04-Jan-21'))).toBeFalse() 
    expect(compare(date).isSame(new Date('06-Jan-21'))).toBeFalse() 
    expect(compare(date).isSame(new Date('05-Jan-21').getTime())).toBeTrue() 
    expect(compare(date).isSame(new Date('04-Jan-21').getTime())).toBeFalse() 
    expect(compare(date).isSame(new Date('06-Jan-21').getTime())).toBeFalse()     
  })

  it('should compare isAfter', () => {
    const date = new Date('05-Jan-21')

    expect(compare(date).isAfter('04-Jan-21')).toBeTrue()
    expect(compare(date).isAfter('05-Jan-21')).toBeFalse()
    expect(compare(date).isAfter('06-Jan-21')).toBeFalse()
    expect(compare(date).isAfter(new Date('04-Jan-21'))).toBeTrue()
    expect(compare(date).isAfter(new Date('05-Jan-21'))).toBeFalse()
    expect(compare(date).isAfter(new Date('06-Jan-21'))).toBeFalse()
    expect(compare(date).isAfter(new Date('04-Jan-21').getTime())).toBeTrue()
    expect(compare(date).isAfter(new Date('05-Jan-21').getTime())).toBeFalse()
    expect(compare(date).isAfter(new Date('06-Jan-21').getTime())).toBeFalse()
  })  

  it('should compare isBefore', () => {
    const date = new Date('05-Jan-21')

    const compareDate = compare(date)

    expect(compareDate.isBefore('06-Jan-21')).toBeTrue()
    expect(compareDate.isBefore('05-Jan-21')).toBeFalse()
    expect(compareDate.isBefore('04-Jan-21')).toBeFalse()
    expect(compareDate.isBefore(new Date('06-Jan-21'))).toBeTrue()
    expect(compareDate.isBefore(new Date('05-Jan-21'))).toBeFalse()
    expect(compareDate.isBefore(new Date('04-Jan-21'))).toBeFalse()
    expect(compareDate.isBefore(new Date('06-Jan-21').getTime())).toBeTrue()
    expect(compareDate.isBefore(new Date('05-Jan-21').getTime())).toBeFalse()
    expect(compareDate.isBefore(new Date('04-Jan-21').getTime())).toBeFalse()
  })

  it('should compare isSameOrAfter', () => {
    const date = new Date('05-Jan-21')
    const compareDate = compare(date)

    expect(compareDate.isSameOrAfter('04-Jan-21')).toBeTrue()
    expect(compareDate.isSameOrAfter('05-Jan-21')).toBeTrue()
    expect(compareDate.isSameOrAfter('06-Jan-21')).toBeFalse()
    expect(compareDate.isSameOrAfter(new Date('04-Jan-21'))).toBeTrue()
    expect(compareDate.isSameOrAfter(new Date('05-Jan-21'))).toBeTrue()
    expect(compareDate.isSameOrAfter(new Date('06-Jan-21'))).toBeFalse()
  })

  it('should compare isSameOrBefore', () => {
    const date = new Date('05-Jan-21')

    const compareDate = compare(date)

    expect(compareDate.isSameOrBefore('06-Jan-21')).toBeTrue()
    expect(compareDate.isSameOrBefore('05-Jan-21')).toBeTrue()
    expect(compareDate.isSameOrBefore('04-Jan-21')).toBeFalse()
    expect(compareDate.isSameOrBefore(new Date('06-Jan-21'))).toBeTrue()
    expect(compareDate.isSameOrBefore(new Date('05-Jan-21'))).toBeTrue()
    expect(compareDate.isSameOrBefore(new Date('04-Jan-21'))).toBeFalse()
    expect(compareDate.isSameOrBefore(new Date('06-Jan-21').getTime())).toBeTrue()
    expect(compareDate.isSameOrBefore(new Date('05-Jan-21').getTime())).toBeTrue()
    expect(compareDate.isSameOrBefore(new Date('04-Jan-21').getTime())).toBeFalse()
  })

})