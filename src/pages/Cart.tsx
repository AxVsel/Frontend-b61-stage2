import { Product } from "../utils/dummy";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CartProps {
  cart: Product[];
}

export default function Cart({ cart }: CartProps) {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>(() => {
    const initial: { [id: number]: number } = {};
    cart.forEach((product) => {
      initial[product.id] = 1;
    });
    return initial;
  });

  const handleIncrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id: number) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 1;
      const newQty = Math.max(currentQty - 1, 1);
      return {
        ...prev,
        [id]: newQty,
      };
    });
  };

  const totalItem = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const totalHarga = cart.reduce((total, product) => {
    const count = quantities[product.id] || 0;
    return total + product.price * count;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Cart</h1>
      <p className="mb-4 text-lg">
        🛒 Total Item: {totalItem} | Total Harga: Rp{" "}
        {totalHarga.toLocaleString("id-ID")}
      </p>
      {cart.length === 0 ? (
        <p className="text-gray-500">Keranjang masih kosong.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <Card
              key={product.id}
              className="max-w-sm w-full shadow-lg rounded-xl border border-gray-200"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base text-indigo-600 font-semibold">
                  Rp {product.price.toLocaleString("id-ID")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex mt-4 justify-center gap-4 items-center">
                  <Button onClick={() => handleDecrease(product.id)}>-</Button>
                  <span>Jumlah: {quantities[product.id]}</span>
                  <Button onClick={() => handleIncrease(product.id)}>+</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
