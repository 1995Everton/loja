export interface Stages {

  cart: boolean
  identification: boolean
  address: boolean
  payment: boolean
  active?: string
  confirmation: boolean
  

}

export enum StagesType {

  CART = 'cart',
  IDENTIFICATION = 'identification',
  ADDRESS = 'address',
  PAYMENT = 'payment',
  CONFIRMATION = 'confirmation'

}
