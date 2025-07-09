import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";

import { Product } from "./utils/dummy";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <BrowserRouter>
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products">Product</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/cart">Cart</Link>
        </Button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/products"
          element={<ProductList cart={cart} setCart={setCart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
