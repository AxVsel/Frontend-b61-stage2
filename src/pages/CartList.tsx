// src/components/ProductList.tsx

import { useState } from "react";
import { useCart } from "../hooks/useCart";

const carts = [
  { id: 1, name: "First Cart", price: 20000 },
  { id: 2, name: "Second Cart", price: 30000 },
  { id: 3, name: "Third Cart", price: 40000 },
];

export default function CardList() {
  const { createCart } = useCart();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAdd = async (name: string, price: number, id: number) => {
    setLoadingId(id);
    await new Promise((res) => setTimeout(res, 500));
    createCart(name, price);
    setLoadingId(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="grid gap-4">
        {carts.map((p) => (
          <div
            key={p.id}
            className="p-4 bg-amber-300 rounded-lg border border-stone-700"
          >
            <h3 className="font-bold">{p.name}</h3>
            <p>Rp{p.price.toLocaleString()}</p>
            <button
              onClick={() => handleAdd(p.name, p.price, p.id)}
              disabled={loadingId === p.id}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:opacity-70"
            >
              {loadingId === p.id ? "Menambahkan..." : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
