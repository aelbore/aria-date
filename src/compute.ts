export type UnitOfTime = 'days' | 'months' | 'years'

export interface ComputeDate {
  add(amount: number): ComputeResult
  subtract(amount: number): ComputeResult
}

export interface ComputeResult {
  days(): Date
  months(): Date
  years(): Date
}

export function compute(date: Date) {
  type Type = 'sub' | 'add'
  type Convert = (unit: UnitOfTime) => Date
  
  const copy = new Date(date.getTime())

  const addSubDate = (amount: number, unit: UnitOfTime, type: Type) => {
    switch (unit) {
      case 'days':
        const day = date.getDate()
        return copy.setDate(type.includes('add') ? (day + amount): (day - amount))
      case 'months':
        const month = date.getMonth()
        return copy.setMonth(type.includes('add') ? (month + amount): (month - amount))
      case 'years':
        const year = date.getFullYear()
        return copy.setFullYear(type.includes('add') ? (year + amount): year - amount)
    }
  }

  const createComputeResult = (convert: Convert) => {
    const result: ComputeResult = {
      days: () => convert('days'),
      months: () => convert('months'),
      years: () => convert('years')
    }
    return result
  }
  
  const result :ComputeDate = {
    add(amount: number) {
      const convert = (unit: UnitOfTime) => new Date(addSubDate(amount, unit, 'add'))
      return createComputeResult(convert)
    },
    subtract(amount: number) {
      const convert = (unit: UnitOfTime) => new Date(addSubDate(amount, unit, 'sub'))
      return createComputeResult(convert)
    }
  }

  return result
}
