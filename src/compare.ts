export interface Comparer {
  isAfter(afterDate: Date | number | string): boolean
  isBefore(beforeDate: Date | number | string): boolean
  isSameOrAfter(afterDate: Date | number | string): boolean
  isSameOrBefore(beforeDate: Date | number | string): boolean
  isSame(date: Date | number | string): boolean
}

export function compare(date: Date | number | string) {
  const copy = new Date(date)

  const result: Comparer = {
    isSame(date: Date | number | string) {
      return copy.getTime() === new Date(date).getTime()
    },
    isAfter(afterDate: Date | number | string) {
      return copy.getTime() > new Date(afterDate).getTime()
    },
    isBefore(beforeDate: Date | number | string) {
      return copy.getTime() < new Date(beforeDate).getTime()
    },
    isSameOrAfter(afterDate: Date | number | string) {
      return copy.getTime() >= new Date(afterDate).getTime()
    },
    isSameOrBefore(beforeDate: Date | number | string) {
      return copy.getTime() <= new Date(beforeDate).getTime()
    }
  }

  return result
}