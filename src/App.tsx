import { useState } from "react";
import Card from "./components/Card";
import { productList } from "./utils/dummy";
import "./App.css";

function App() {
  const [cart, setCart] = useState<{ [productId: number]: number }>({});

  const handleAdd = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const totalItem = Object.values(cart).reduce((sum, val) => sum + val, 0);

  const totalHarga = productList.reduce((total, product) => {
    const count = cart[product.id] || 0;
    return total + product.price * count;
  }, 0);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Produk</h2>
      <p style={{ textAlign: "center" }}>
        🛒 Total Item: {totalItem} | Total Harga: Rp{" "}
        {totalHarga.toLocaleString()}
      </p>

      <div className="card-container">
        {productList.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            count={cart[product.id] || 0}
            onAdd={() => handleAdd(product.id)}
            onRemove={() => handleRemove(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
