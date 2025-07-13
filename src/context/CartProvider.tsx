// src/context/CartProvider.tsx

import { useState } from "react";
import type { Cart } from "../types/cart";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(false);
  const [idCounter, setIdCounter] = useState(1);

  const createCart = (name: string, price: number) => {
    setLoading(true);

    setCarts((prev) => {
      const existing = prev.find((c) => c.name === name);
      if (existing) {
        // hanya tambah quantity
        return prev.map((c) =>
          c.name === name ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        // buat item baru
        const newCart: Cart = {
          id: idCounter,
          name,
          price,
          quantity: 1,
        };
        setIdCounter((i) => i + 1);
        return [newCart, ...prev];
      }
    });

    setTimeout(() => setLoading(false), 500);
  };

  const updateCart = (id: number, quantity: number) => {
    setLoading(true);

    setCarts(
      (prev) =>
        prev
          .map((c) => (c.id === id ? { ...c, quantity } : c))
          .filter((c) => c.quantity > 0) // hapus jika quantity = 0
    );

    setTimeout(() => setLoading(false), 1000); // simulasi delay
  };

  const deleteCart = (id: number) => {
    setLoading(true);
    setCarts((prev) => prev.filter((c) => c.id !== id));
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <CartContext.Provider
      value={{ carts, createCart, updateCart, deleteCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};
