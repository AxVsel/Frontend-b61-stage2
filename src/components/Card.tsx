import { useEffect, useState } from "react";
import { productList } from "../dummy/product";
import useDebounce from "../hooks/useDebounce";
import "./style.css";

function Card() {
  const [cart, setCart] = useState<{ [productId: number]: number }>({});
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchInput, 500);

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

  // Efek ketika pencarian berubah
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = productList.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000); // simulasi loading

    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Produk</h2>
      <p style={{ textAlign: "center" }}>
        🛒 Total Item: {totalItem} | Total Harga: Rp{" "}
        {totalHarga.toLocaleString()}
      </p>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>🔄 Sedang mencari produk...</p>
      ) : filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>❌ Produk tidak ditemukan</p>
      ) : (
        <div className="card-container">
          {filteredProducts.map((product) => {
            const count = cart[product.id] || 0;
            return (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Rp {product.price.toLocaleString()}</p>

                {count === 0 ? (
                  <button className="btn" onClick={() => handleAdd(product.id)}>
                    + Tambah ke Keranjang
                  </button>
                ) : (
                  <div className="cart-controls">
                    <button onClick={() => handleRemove(product.id)}>-</button>
                    <span>Jumlah: {count}</span>
                    <button onClick={() => handleAdd(product.id)}>+</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Card;
