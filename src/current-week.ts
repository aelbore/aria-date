import { formatter } from './formatter'
import { CurrentWeek, WeekRange } from './types'
import { getWeeksInMonth } from './weeks-in-month'

export function getCurrentWeek(date: Date, weeks?: WeekRange[]) {
  weeks = weeks || getWeeksInMonth(date)

  const currentDay = date.getDate()

  const currentWeek = weeks.find(week => {
    return (week.start <= currentDay && week.end >= currentDay )
  })

  const result: CurrentWeek = {
    date,
    week: weeks.indexOf(currentWeek) + 1,
    range: currentWeek   
  }

  return result
}

export function getCurrentWeekDates(currentWeek: CurrentWeek) {
  const dates: string[] = [], { range: { start, end }, date  } = currentWeek
  
  for (let i = start; i <= end; i++) {
    const currentDay = new Date(date.getFullYear(), date.getMonth(), i)
    dates.push(formatter(currentDay).format('DD-MMM-YYYY'))
  } 

  return dates
}