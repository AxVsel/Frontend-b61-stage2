import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieFavorite from "./private-content/MovieFavorite";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";

import { useAuth } from "./hooks/useAuth";

function Header() {
  const { token, logout } = useAuth();
  return (
    <>
      <div className="w-full flex flex-wrap gap-4 p-4 justify-end  border-b mb-4 bg-white dark:bg-zinc-900">
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/movielist">Movie List</Link>
        </Button>
        {token && (
          <Button className=" hover:bg-zinc-600" asChild variant="outline">
            <Link to="/moviefavorite">Movie Favorite</Link>
          </Button>
        )}
        <ThemeToggle />

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
      ;
    </>
  );
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/moviefavorite"
              element={
                <PrivateRoute>
                  <MovieFavorite />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
