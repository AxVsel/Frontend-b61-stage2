// src/context/CartContext.tsx

import { createContext } from "react";
import type { Cart } from "../types/cart";

export interface CartContextType {
  carts: Cart[];
  createCart: (name: string, price: number) => void;
  updateCart: (id: number, quantity: number) => void;
  deleteCart: (id: number) => void;
  loading: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
