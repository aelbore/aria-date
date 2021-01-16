export interface WeekRange {
  start: number
  end: number
}

export interface CurrentWeek {
  date: Date
  week: number
  range: WeekRange
}

export type WeekDay = 'short' | 'long'
