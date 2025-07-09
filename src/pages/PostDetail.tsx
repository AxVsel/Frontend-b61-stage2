import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary">Post Detail</h1>
      <p className="text-gray-600 mt-2">
        Menampilkan detail post dengan ID: {id}
      </p>
    </div>
  );
}
