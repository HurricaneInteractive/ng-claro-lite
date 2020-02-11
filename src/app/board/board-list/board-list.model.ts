export interface BoardDate {
  day: string
  date: string
  past: boolean
  current: boolean
  future: boolean
}

export interface BoardItem {
  dayYear: number
  dayIdx: number
  boardDate: BoardDate
}
