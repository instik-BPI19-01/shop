import { CategoryItem } from "./category-item.interface";

export interface ProductItem {
  id: number;
  category: CategoryItem;
  title: string;  
  image?: string;
  description: string;
  count: number;
  cost: number;
}