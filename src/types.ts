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
  
export interface WeekRange {
  start: number
  end: number
}

export interface Formatter {
  format: (format: DateFormat) => string
}

export interface CurrentWeek {
  date: Date
  week: number
  range: WeekRange
}

export type WeekDay = 'short' | 'long'
