import { DateFormat } from './types'

export function formatter(date?: Date) {
  const value = date || new Date()

  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  const day = value.getDate(), month = value.getMonth(), year = value.getFullYear()

  const getDate = day.toString().padStart(2, '0') 
  const getMonth = months[month]
  const getYear = year.toString()

  const formats: { [key: string]: string } = {
    'DD-MMM-YY': `${getDate}-${getMonth}-${getYear.substr(2)}`,
    'DD-MMM-YYYY': `${getDate}-${getMonth}-${getYear.substr(0)}`,
    'DD-MMM': `${getDate}-${getMonth}`,
    'MMM': getMonth,
    'DD': getDate,
    'YY': getYear.substr(2),
    'YYYY': getYear.substr(0),
    'DD-MM-YY': `${getDate}-${month.toString().padStart(2, '0')}-${getYear.substr(2)}`,
  }

  const format = (format: DateFormat) => formats[format]

  return { format }
}