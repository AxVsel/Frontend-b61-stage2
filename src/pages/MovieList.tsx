import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tmdbApi } from "../services/api";
import { useEffect, useState } from "react";
import type { MovieType } from "../types/movie";

export default function MovieList() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await tmdbApi.get("movie/popular", {
          params: {
            language: "en-US",
            page: 1,
          },
        });

        // TMDB response shape: { page, results: [array of movies], total_pages, ... }
        setMovies(res.data.results);
      } catch (err) {
        console.error("Gagal fetch data movies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center h-24">
        <h1 className="text-3xl mb-3 font-bold">Movie List</h1>
        <p>Welcome to Movie List</p>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="bg-gray-100 w-full shadow-md rounded-lg"
            >
              <CardHeader className="p-0 overflow-hidden">
                <img
                  className="w-full h-64 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </CardHeader>
              <div className="p-4">
                <CardTitle className="text-center text-lg font-semibold">
                  {movie.original_title}
                </CardTitle>
                <CardDescription className="text-sm mt-2 text-center">
                  Rating: / 10
                </CardDescription>
              </div>
              <CardFooter className="flex items-center justify-center gap-2 mb-2">
                <Button>Add</Button>
                <Button>Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
