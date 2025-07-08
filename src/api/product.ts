import { productList } from "../dummy/product";
import type { Product } from "../dummy/product";

// Fungsi mock "API" untuk ambil produk
export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 1000); // delay 1 detik
  });
}
