import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";
const categories = {
  trending: "Trending Movies",
  popular: "Popular Movies",
  top_rated: "Top Rated Movies",
  upcoming: "Upcoming Movies",
  now_playing: "Now Playing",
};
export default function MovieListing() {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        if (!categories[category]) {
          throw new Error("This movie category does not exist.");
        }

        const results = await getMovies(category, page);

        if (active) setMovies(results);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [category, page]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <main className="min-h-screen px-5 py-8 md:px-10 lg:px-12">
      <Link to="/" className="text-sm text-indigo-400 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="mt-5 text-2xl font-bold md:text-3xl">
        {categories[category] || "Movies"}
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Explore movies and discover your next favorite.
      </p>

      {loading && (
        <p className="py-16 text-center">Loading movies...</p>
      )}

      {error && (
        <p className="py-16 text-center text-red-400">{error}</p>
      )}

      {!loading && !error && (
        <>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              disabled={page === 1}
              onClick={() => setPage((current) => current - 1)}
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm disabled:opacity-40"
            >
              Previous
            </button>
            <span className="text-sm text-slate-300">
              Page {page}
            </span>
            <button
              disabled={movies.length === 0}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-500 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}