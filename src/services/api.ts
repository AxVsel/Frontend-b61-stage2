import axios from "axios";

// Buat instance khusus untuk TMDB API
export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQwOTE3YmE1NWQwMWZiY2VlOTFmOTY3MDNkZWQ5MiIsIm5iZiI6MTc1MjE5NDk0OC40NzUwMDAxLCJzdWIiOiI2ODcwNWY4NDU0ZGM5ODg3NGFiYTI5NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dWcaqHcsnXxMsVIxpTBjSye5w-XveFhCbqPZvTavdHY`,
  },
});

// Contoh pemanggilan endpoint "movie/popular"
tmdbApi
  .get("movie/popular", {
    params: {
      language: "en-US",
      page: 1,
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
