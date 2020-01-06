import { Product } from './product';

export interface Request {
   amount: number
   price_total: number
   status: boolean
   address_id: number
   products: Product[]
}
