import { useEffect, useState } from "react";
import { Heart, Bookmark, Star } from "lucide-react";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";
function readSaved(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
export default function MovieCard({ movie }) {
  const [favorites, setFavorites] = useState(() => readSaved("favorites"));
  const [watchlist, setWatchlist] = useState(() => readSaved("watchlist"));
  const isFavorite = favorites.includes(movie.id);
  const isSaved = watchlist.includes(movie.id);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  function toggleItem(id, items, setItems) {
    setItems(
      items.includes(id)
        ? items.filter((item) => item !== id)
        : [...items, id]
    );
  }
  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Coming soon";
  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-[#07121d]">
      <div className="relative aspect-[2/3] overflow-hidden">
        {movie.poster_path ? (
          <img
            src={`${POSTER_URL}${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-800 p-3 text-center text-sm">
            {movie.title}
          </div>
        )}
        <button
          onClick={() =>
            toggleItem(movie.id, watchlist, setWatchlist)
          }
          aria-label={isSaved ? "Remove from watchlist" : "Add to watchlist"}
          className="absolute right-2 top-2 rounded-lg bg-black/70 p-2 hover:bg-indigo-600"
        >
          <Bookmark
            size={17}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="truncate text-sm font-semibold" title={movie.title}>
          {movie.title}
        </h3>
        <p className="mt-1 text-xs text-slate-400">{year}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm">
            <Star size={15} fill="#fbbf24" color="#fbbf24" />
            {Number(movie.vote_average || 0).toFixed(1)}
          </span>
          <button
            onClick={() =>
              toggleItem(movie.id, favorites, setFavorites)
            }
            aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
            className="rounded p-1 hover:text-pink-500"
          >
            <Heart
              size={18}
              fill={isFavorite ? "#ec4899" : "none"}
              color={isFavorite ? "#ec4899" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
