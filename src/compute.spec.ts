import { expect } from 'aria-mocha'

import { compute } from './compute'
import { formatter } from './formatter'

describe('compute', () => {

  it('should compute add date', () => {
    const date = new Date('02-Jan-20')

    const days = formatter(compute(date).add(2).days()).format('DD-MM-YY')
    const expectedDays = formatter(new Date('04-Jan-20')).format('DD-MM-YY')
    expect(days).equal(expectedDays)

    const months = formatter(compute(date).add(1).months()).format('DD-MM-YY')
    const expectedMonths = formatter(new Date('02-Feb-20')).format('DD-MM-YY')
    expect(months).equal(expectedMonths)

    const years = formatter(compute(date).add(1).years()).format('DD-MM-YY')
    const expectedYears = formatter(new Date('02-Jan-21')).format('DD-MM-YY')
    expect(years).equal(expectedYears)
  })

  it('should compute subtract date', () => {
    const date = new Date('05-Jan-20')

    const days = formatter(compute(date).subtract(2).days()).format('DD-MM-YY')
    const expectedDays = formatter(new Date('03-Jan-20')).format('DD-MM-YY')
    expect(days).equal(expectedDays)

    const months = formatter(compute(date).subtract(1).months()).format('DD-MM-YY')
    const expectedMonths = formatter(new Date('05-Dec-19')).format('DD-MM-YY')
    expect(months).equal(expectedMonths)

    const years = formatter(compute(date).subtract(1).years()).format('DD-MM-YY')
    const expectedYears = formatter(new Date('05-Jan-19')).format('DD-MM-YY')
    expect(years).equal(expectedYears)
  })

})