export interface gatAllProducts {
  message: string
  metadata: Metadata
  products: Product[]
}

export interface Metadata {
  currentPage: number
  totalPages: number
  limit: number
  totalItems: number
}

// API Product Model
export interface Product {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  imgCover: string;
  images?: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  discount?: number;
  category?: string;
  occasion?: string;
  createdAt: string;
  updatedAt?: string;
  sold: number;
  rateAvg: number;
  rateCount?: number;
  favoriteId?: string | null;
  isInWishlist?: boolean;
  isSuperAdmin?: boolean;
  __v?: number;
}
