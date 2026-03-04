export interface ITestimonials {
  message: string;
  metadata: MetaData;
  testimonials: TestimonialsUsers[];
}

export interface MetaData {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
}

export interface TestimonialsUsers {
  _id: string;
  user: UserData;
  rating: number;
  content: string;
  status: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
}
