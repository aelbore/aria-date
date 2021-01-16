import { WeekRange } from './types'

export function getWeeksInMonth(date: Date | string | number) {
  const month  = new Date(date).getMonth(), year = new Date(date).getFullYear()

  const weeks: WeekRange[] = []
  const firstDate = new Date(year, month, 1)
  const lastDate = new Date(year, month + 1, 0)
  const numDays = lastDate.getDate()

  let start = 1, end = (firstDate.getDay() === 0) ? 1: 7 - firstDate.getDay() + 1

  while (start <= numDays) {
    weeks.push({ start, end })
    
    start = end + 1
    end = end + 7

    if (end > numDays) {
      end = numDays
    }
  }

  return weeks
}