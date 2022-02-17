import { ReactNode } from "react";
import { ProductInterface } from "./data";

export interface WrapperProps {
  children: ReactNode;
}

export interface ProductCardProps {
  product: ProductInterface;
}

export interface FilterControlMajorProps extends WrapperProps {
  title: string;
}
