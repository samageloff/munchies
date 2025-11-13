export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

export interface RestaurantsResponse {
  restaurants: Restaurant[];
}

export interface ApiResponse<T> {
  source: "cache" | "live";
  data: T;
}
