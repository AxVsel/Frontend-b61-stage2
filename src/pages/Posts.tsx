import { Link, Outlet } from "react-router-dom";

const posts = [
  { id: 1, title: "Fisrt Post" },
  { id: 2, title: "Second Post" },
  { id: 3, title: "Third Post" },
];

export default function Posts() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Posts Page</h1>
      <ul className="mb-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()} className="text-blue-500 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
