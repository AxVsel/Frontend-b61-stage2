import CartCard from "./pages/CartList";
import { CartProvider } from "./context/CartProvider";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <CartProvider>
        <div className="">
          <div className="flex flex-col items-center h-20 bg-amber-400 justify-center">
            <h1 className="font-semibold text-4xl">Cart Management</h1>
          </div>

          <div className="min-h-screen bg-gray-100 p-6 space-y-6 md:flex md:space-x-6 md:space-y-0">
            <div className="md:flex-1">
              <CartCard />
            </div>
            <div className="md:w-1/3">
              <Checkout />
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
