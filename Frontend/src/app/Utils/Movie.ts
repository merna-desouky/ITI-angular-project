export interface Movie {
  id: number;
  Title: string;
  Year: string;
  Rated: string;
  Genre: string;
  Language: string;
  Poster: string;
  Ratings: Rating[];
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface Checkout {
  id: number;
  Poster: string;
  Title: string;
  totalSeats: number;
  totalPrice: number;
}
