import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

const productList: Product[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/1200x/ce/de/67/cede675d9318d2e56e7ce8a7fde44829.jpg",
    name: "Baju Hitam",
    price: 220000,
  },
  {
    id: 2,
    image: "https://i.imgur.com/VD09afj.jpeg",
    name: "Baju Merah",
    price: 420000,
  },
  {
    id: 3,
    image: "https://i.imgur.com/AIxMk4n.jpeg",
    name: "Baju Kuning",
    price: 620000,
  },
  {
    id: 4,
    image: "https://i1.sndcdn.com/avatars-rOzbuxev3m2sJdqy-oU0YyA-t240x240.jpg",
    name: "Baju Putih",
    price: 460000,
  },
  {
    id: 5,
    image:
      "https://laboiteameme.fr/_data/i/upload/2024/03/20/20240320170127-03054f87-me.jpg",
    name: "Baju Hijau",
    price: 320000,
  },
];

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
