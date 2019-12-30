export interface User {
  username: string
  email:  string
  name: string
  id?: number
  manager?: boolean
  active?: boolean
  telephone?:string
  genre?: string
  rg?: string
  cpf?: string
  last_visit?: string
  visits?: number
  token?: string
  created_at?: string
  updated_at?: string

}
