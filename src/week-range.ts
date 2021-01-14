import { formatter } from './formatter'
import { getWeeksInMonth } from './weeks-in-month'
import { getCurrentWeek } from './current-week'
import { WeekRange } from './types'

export interface CurrentWeekDates {
  week: number
  dates: string[]
}

export interface DateDetails {
  lastDate?: number
  currentWeek: CurrentWeekDates
}

function getDetails(date: Date) {
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const currentWeek = getCurrentWeekDates(date)

  const result: DateDetails = {
    lastDate, 
    currentWeek 
  }
  return result
}

function getPrevWeekDates(details: DateDetails) {
  const { currentWeek: { dates, week } } = details, weekDates: string[] = []

  const firstDateOfCurrentWeek = new Date(dates[0])
  const firstDateOfPrevWeek = new Date((new Date(firstDateOfCurrentWeek.getTime()).setDate(firstDateOfCurrentWeek.getDate() - 7)))

  if (week === 2) {
    const lastDateOfPrevWeek = new Date((new Date(firstDateOfCurrentWeek.getTime()).setDate(firstDateOfCurrentWeek.getDate() - 1)))
    const items = getDetails(lastDateOfPrevWeek)
    items.currentWeek.dates.forEach(date => {
      weekDates.push(date)
    })
  }
  const results = getDetails(firstDateOfPrevWeek)

  return { 
    currentWeek: { 
      ...results.currentWeek,
      dates: [ 
        ...results.currentWeek.dates, ...weekDates,  
      ] 
    }
  }
}

function getCurrentWeekDates(date: Date, weeks?: WeekRange[]) {
  weeks = weeks || getWeeksInMonth(date)

  const currentWeek = getCurrentWeek(date, weeks)
  const dates = []

  const { start, end } = currentWeek.range
  for (let i = start; i <= end; i++) {
    const currentDay = new Date(date.getFullYear(), date.getMonth(), i)
    dates.push(formatter(currentDay).format('DD-MMM-YYYY'))
  }

  return {
    week: currentWeek.week,
    dates
  }
}

export function getWeekRange(date: Date, range: number = 4) {
  const weekRanges = [], currentWeek = getDetails(date)
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

  weekRanges.push(currentWeek)
  for (let i = 0; i < range; i++) {
    weekRanges.push(getPrevWeekDates(weekRanges[i]))
  }

  const getDateRange = (dates: string) => {
    const firstDate = new Date(dates[0]), lastDate = new Date(dates[dates.length - 1])
    if (firstDate.getMonth() === lastDate.getMonth()) {
      return `${firstDate.getDate()}-${lastDate.getDate()} ${months[firstDate.getMonth()]}`
    }

    if (firstDate.getFullYear() !== lastDate.getFullYear() && firstDate.getMonth() !== lastDate.getMonth()) {
      return `${formatter(firstDate).format('DD-MMM')}-${formatter(lastDate).format('DD-MMM-YY')}`
    }

    return `${formatter(firstDate).format('DD MMM')}${formatter(lastDate).format('DD MMM')}`
  }

  const results = weekRanges.reduce((prev, cur, index) => {
    prev.push({  
      index, 
      range: getDateRange(cur.currentWeek.dates),
      dates: cur.currentWeek.dates
    })
    return prev
  }, [])

  return results
}