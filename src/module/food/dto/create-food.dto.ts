export interface CreateFoodRequest {
  name: string;
  price: string;
  description: string;
  expirationDate: Date;
}

export interface CreateFoodResponse {
  result: boolean;
  code: string;
}
