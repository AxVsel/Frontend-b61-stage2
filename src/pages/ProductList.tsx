// Import type Product
import { Product, productList } from "../utils/dummy";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductListProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductList({ cart, setCart }: ProductListProps) {
  const handleToggleCart = (product: Product) => {
    const exists = cart.some((item) => item.id === product.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">List Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((product) => {
          const isAdded = cart.some((item) => item.id === product.id);
          return (
            <Card
              key={product.id}
              className="max-w-sm w-full shadow-lg rounded-xl border"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover rounded-t-xl"
                />
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base text-indigo-600 font-semibold">
                  Rp {product.price.toLocaleString("id-ID")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex mt-4 justify-center">
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="outline">Details</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            Description : {product.name}
                          </DialogTitle>
                          <DialogDescription>
                            <p className="text-gray-600 text-sm ">
                              {product.description}
                            </p>
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                  <Button
                    onClick={() => handleToggleCart(product)}
                    variant={isAdded ? "secondary" : "default"}
                  >
                    {isAdded ? "Added" : "Add"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
