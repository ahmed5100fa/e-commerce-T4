export interface ProfileInter {
  message: string
  user: User
}

export interface User {
  _id?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  gender?: string
  phone?: string
  photo?: string
  role?: string
  wishlist?: any[]
  addresses?: Address[]
  createdAt?: string
}

export interface Address {
  street: string
  phone: string
  city: string
  lat: string
  long: string
  username: string
  _id: string
}
