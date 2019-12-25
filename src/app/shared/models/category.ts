export interface Category {
  id: number
  name: string
  active: boolean
  photo: string
  category_id: number
  order: number
  sub_category: Category[]
}