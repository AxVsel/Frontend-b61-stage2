import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieFavorite from "./private-content/MovieFavorite";

function Header() {
  return (
    <>
      <div className="w-full flex flex-wrap gap-4 p-4 justify-end  border-b mb-4 bg-white dark:bg-zinc-900">
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/movielist">Movie List</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/moviefavorite">Movie Favorite</Link>
        </Button>
      </div>
      ;
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/moviefavorite" element={<MovieFavorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
