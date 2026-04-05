export interface CartResponse {
  message: string;
  numOfCartItems: number;
  cart: CartInter;
}

export interface CartInter {
  _id: string;
  user: string;
  cartItems: CartItem[];
  appliedCoupons: any[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  _id: string;
  product: Product;
  price: number;
  quantity: number;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images?: string[];
  category?: string;
  occasion?: string;

  price?: number;
  priceAfterDiscount?: number;

  quantity?: number;
  sold?: number;

  rateAvg?: number;
  rateCount?: number;

  createdAt?: string;
  updatedAt?: string;

  isSuperAdmin?: boolean;
  __v?: number;
}
