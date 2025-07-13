// src/components/Checkout.tsx

import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { carts, updateCart, deleteCart, loading } = useCart();

  const grandTotal = carts.reduce((sum, c) => sum + c.price * c.quantity, 0);

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      {carts.length === 0 ? (
        <p className="text-sm text-gray-600">Keranjang kosong.</p>
      ) : (
        <ul className="space-y-4">
          {carts.map((c) => (
            <li
              key={c.id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
            >
              <div>
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm">
                  Rp{c.price.toLocaleString()} x {c.quantity} ={" "}
                  <span className="font-medium">
                    Rp{(c.price * c.quantity).toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateCart(c.id, c.quantity - 1)}
                  disabled={loading}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  –
                </button>
                <button
                  onClick={() => updateCart(c.id, c.quantity + 1)}
                  disabled={loading}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  +
                </button>
                <button
                  onClick={() => deleteCart(c.id)}
                  disabled={loading}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}{" "}
      {loading && <p className="mt-10">Loading...</p>}
      {carts.length > 0 && (
        <div className="mt-4 text-right font-semibold">
          Grand Total: Rp{grandTotal.toLocaleString()}
        </div>
      )}
    </div>
  );
}
