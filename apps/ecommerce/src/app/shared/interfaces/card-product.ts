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
