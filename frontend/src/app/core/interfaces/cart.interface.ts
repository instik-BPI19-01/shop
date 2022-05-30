import { ProductItem } from "./product-item.interface";

export interface Cart {
  full_cost: number;
  items: CartItem[];
}

export interface CartItem {
  count: number;
  product: ProductItem;
}