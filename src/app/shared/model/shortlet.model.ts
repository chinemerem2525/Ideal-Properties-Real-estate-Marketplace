export interface Shortlet {
  id: string;
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  type: string;
  badges: string[];
  badge: string;
  price: string;       // We will parse this string to number for filtering
  priceLabel: string;
}
