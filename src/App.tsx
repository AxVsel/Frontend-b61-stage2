import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/about">About</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/posts">Posts</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
