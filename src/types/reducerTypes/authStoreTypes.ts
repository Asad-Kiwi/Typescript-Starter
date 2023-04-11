export interface IProductListing {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface ISuccessType {
  products: IProductListing[] | null;
  total: number;
  skip: number;
  limit: number;
}

export interface IAuthStateType {
  userLogin: {
    isLoading: boolean;
    success: ISuccessType | null;
    failed: string | null;
    status: string;
  };
}

export interface LoginRequestType {}
