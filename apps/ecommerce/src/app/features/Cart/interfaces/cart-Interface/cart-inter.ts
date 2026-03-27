export interface CartResponse {
  message: string
  numOfCartItems: number
  cart: Cartinter
}

export interface Cartinter {
  cartItems: any[]
  discount: number
  totalPrice: number
  totalPriceAfterDiscount: number
}
