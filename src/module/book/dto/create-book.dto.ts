export interface CreateBookRequest {
  name: string;
  price: string;
  description: string;
}

export interface CreateBookResponse {
  result: boolean;
  code: string;
}
