export interface OccasionsResponse {
  message: string
  metadata: Metadata
  occasions: Occasion[]
}

export interface Metadata {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}

export interface Occasion {
  _id: string
  name: string
  slug: string
  image: string
  isSuperAdmin: boolean
  createdAt: string
  updatedAt: string
  productsCount: number
}


export interface CategoriesResponse {
  message: string
  metadata: Metadata2
  categories: Category[]
}

export interface Metadata2 {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
  isSuperAdmin: boolean
  createdAt: string
  updatedAt: string
  productsCount: number
}

export interface specficProductResponse {
  message: string
  product: Product
}

export interface Product {
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  discount: number
  rateAvg: number
  rateCount: number
  quantity: number
  category: string
  occasion: string
  isSuperAdmin: boolean
  createdAt: string
  updatedAt: string
  __v: number
  favoriteId: any
  isInWishlist: boolean
}

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
}

export interface IDeleteProductResponse {
  message: string;
  document: IProduct;
}
