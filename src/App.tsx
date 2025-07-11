import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/login";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";
import { useAuth } from "./hooks/useAuth";

function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex flex-wrap gap-4 p-4 border-b mb-4 bg-white dark:bg-zinc-900">
      <Button className=" hover:bg-zinc-600" asChild variant="outline">
        <Link className="" to="/">
          Home
        </Link>
      </Button>
      <Button className=" hover:bg-zinc-600" asChild variant="outline">
        <Link to="/about">About</Link>
      </Button>

      {token && (
        <Button className=" hover:bg-zinc-600" asChild variant="outline">
          <Link to="/products">Products</Link>
        </Button>
      )}

      {token && (
        <Button className=" hover:bg-zinc-600" asChild variant="outline">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      )}
      <div className="float-right">
        <ThemeToggle />
      </div>
      {token ? (
        <Button onClick={logout} variant="destructive">
          Logout
        </Button>
      ) : (
        <Button className=" hover:bg-zinc-600" asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
