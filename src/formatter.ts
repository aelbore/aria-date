import { getDay } from './days'

export type DateFormat = 'DD-MMM-YY' 
  | 'DD-MMM-YYYY' 
  | 'DD-MM-YY' 
  | 'DD-MMM'
  | 'MMM-YY'
  | 'MMM-YYYY' 
  | 'DD' 
  | 'MMM' 
  | 'YY' 
  | 'YYYY'
  | 'MMM YYYY'
  | 'MMM YY'
  | 'ddd, MMM YYYY'
  | 'ddd, MMM YY'
  | 'dddd, MMM YYYY'
  | 'dddd, MMM YY'
  | 'DD MMM, ddd'
  | 'DD MMM, dddd'
  | 'DD MMM'
  | 'DD MMM YY'
  | 'yyyy-MM-dd HH:mm:ss'

export interface Formatter {
  format: (format: DateFormat) => string
}

export function padStart(value: number) {
  return value.toString().padStart(2, '0')
}

export function formatter(date?: Date | string | number) {
  const value = date ? new Date(date): new Date()

  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  const day = value.getDate(), month = value.getMonth(), year = value.getFullYear(), weekday = value.getDay()
  const hour = value.getHours(), minute = value.getMinutes(), secs = value.getSeconds()

  const getDate = day.toString().padStart(2, '0') 
  const getMonth = months[month]
  const getYear = year.toString()
  const time = `${padStart(hour)}:${padStart(minute)}:${padStart(secs)}`
 
  const formats: { [key: string]: string } = {
    'DD-MMM-YY': `${getDate}-${getMonth}-${getYear.substr(2)}`,
    'DD-MMM-YYYY': `${getDate}-${getMonth}-${getYear.substr(0)}`,
    'DD-MMM': `${getDate}-${getMonth}`,
    'MMM-YY': `${getMonth}-${getYear.substr(2)}`,
    'MMM-YYYY': `${getMonth}-${getYear.substr(0)}`,
    'MMM': getMonth,
    'DD': getDate,
    'YY': getYear.substr(2),
    'YYYY': getYear.substr(0),
    'DD-MM-YY': `${getDate}-${month.toString().padStart(2, '0')}-${getYear.substr(2)}`,
    'MMM YY': `${getMonth} ${getYear.substr(2)}`,
    'MMM YYYY': `${getMonth} ${getYear.substr(0)}`,
    'ddd, MMM YYYY': `${getDay(weekday)}, ${getMonth} ${getYear.substr(0)}`,
    'dddd, MMM YYYY': `${getDay(weekday, 'long')}, ${getMonth} ${getYear.substr(0)}`,
    'ddd, MMM YY': `${getDay(weekday)}, ${getMonth} ${getYear.substr(2)}`,
    'dddd, MMM YY': `${getDay(weekday, 'long')}, ${getMonth} ${getYear.substr(2)}`,
    'DD MMM, ddd': `${getDate} ${getMonth}, ${getDay(weekday)}`,
    'DD MMM, dddd': `${getDate} ${getMonth}, ${getDay(weekday, 'long')}`,
    'DD MMM': `${getDate} ${getMonth}`,
    'DD MMM YY': `${getDate} ${getMonth} ${getYear.substr(2)}`,
    'yyyy-MM-dd HH:mm:ss': `${getYear}-${(month + 1).toString().padStart(2, '0')}-${getDate} ${time}`
  }

  const format = (format: DateFormat) => formats[format]

  return { format }
}