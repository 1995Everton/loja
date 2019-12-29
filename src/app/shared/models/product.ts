export interface Product {
  id: number
  name: string
  details: string
  miniature: string
  unitary_value: number
  stock: number
  last_sale: string
  cost_price: number
  created_at: string
  updated_at: string
  category_id: number
  brand_id: number
  amount?: number

}
