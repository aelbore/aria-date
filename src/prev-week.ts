import { getCurrentWeekDates, getCurrentWeek } from './current-week'
import { CurrentWeek } from './types'
import { compute } from './compute'

export interface PreviousWeek {
  currentWeek: CurrentWeek
  dates?: string[]
}

export interface PreviousWeeksOptions extends PreviousWeekOptions {
  range: number
}

export interface PreviousWeekOptions {
  datesInPrevMonth?: boolean
}

export function getPreviousWeeks(date: Date, options: PreviousWeeksOptions) {
  const { range, datesInPrevMonth } = options

  const weeks: PreviousWeek[] = []
  const currentWeek = getCurrentWeek(date)

  weeks.push({ currentWeek })
  for (let i = 0; i < range; i++) {
    const week = weeks[i].currentWeek
    let previousWeek = getPreviousWeek(week, { datesInPrevMonth })

    if (Array.isArray(previousWeek)) {
      const prevWeek = previousWeek[0] as PreviousWeek
      prevWeek.currentWeek = previousWeek[1].currentWeek
      prevWeek.dates = [ ...previousWeek[1].dates, ...prevWeek.dates ]
      previousWeek = prevWeek
    } 

    weeks.push(previousWeek as PreviousWeek)
  }

  return weeks.splice(1, range)
}

export function getPreviousWeek(currentWeek: CurrentWeek, options?: PreviousWeekOptions) {
  const results: PreviousWeek[] = []

  const dates = getCurrentWeekDates(currentWeek)

  const firstDateOfCurrentWeek = new Date(dates[0])

  const previousWeek = getCurrentWeek(compute(firstDateOfCurrentWeek).subtract(1).days())
  const previousWeekDates = getCurrentWeekDates(previousWeek)

  const result: PreviousWeek = {
    currentWeek: previousWeek,
    dates: previousWeekDates
  }
  results.push(result)

  if (options?.datesInPrevMonth && (result.currentWeek.week === 1)) {
    const prevWeek = getCurrentWeek(compute(firstDateOfCurrentWeek).subtract(7).days())
    results.push({ 
      currentWeek: prevWeek,
      dates: getCurrentWeekDates(prevWeek)
    } as PreviousWeek)
  }

  return (results.length > 1 ? results: results.shift())
}