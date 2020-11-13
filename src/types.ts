export type DateFormat = 'DD-MMM-YY' 
  | 'DD-MMM-YYYY' 
  | 'DD-MM-YY' 
  | 'DD-MMM' 
  | 'DD' 
  | 'MMM' 
  | 'YY' 
  | 'YYYY'

export interface WeekRange {
  start: number
  end: number
}

export interface Formatter {
  format: (format: DateFormat) => string
}

export interface CurrentWeek {
  week: number
  range: WeekRange
}