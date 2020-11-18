import { WeekDay } from './types'

export const days = {
  short: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
  long: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
} as const

export function getDay(day: number, type?: WeekDay) {
  return type ? days[type][day]: days['short'][day]
}

export function getLastDate(date?: Date) {
  const copy = date || new Date()
  return new Date(
    copy.getFullYear(),
    copy.getMonth() + 1,
    0,
    copy.getHours(),
    copy.getMinutes(),
    copy.getSeconds(),
    copy.getMilliseconds()
  )
}