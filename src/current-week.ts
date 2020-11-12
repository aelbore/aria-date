import { WeekRange } from './types'
import { getWeeksInMonth } from './weeks-in-month'

export function getCurrentWeek(date: Date, weeks?: WeekRange[]) {
  weeks = weeks || getWeeksInMonth(date)

  const currentDay = date.getDate()

  const currentWeek = weeks.find(week => {
    return (week.start <= currentDay && week.end >= currentDay )
  })

  return {
    week: weeks.indexOf(currentWeek) + 1,
    range: currentWeek
  }
}