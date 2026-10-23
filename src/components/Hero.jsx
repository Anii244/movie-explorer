import { Link } from "react-router-dom";
import { Play, Plus, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function Hero({ movie }) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  if (!movie) return null;
  const year = movie.release_date?.slice(0, 4) || "";
  return (
    <section
      className="relative flex min-h-[390px] items-center overflow-hidden bg-cover bg-center md:min-h-[450px]"
      style={{
        backgroundImage: `linear-gradient(90deg, #030b13 0%, rgba(3,11,19,.92) 30%, rgba(3,11,19,.35) 75%, rgba(3,11,19,.2) 100%), url(${IMAGE_URL}${movie.backdrop_path || movie.poster_path || ""})`,
      }}>
      <div className="max-w-2xl px-6 py-12 md:px-12">
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
          FEATURED
        </span>
        <h1 className="mt-5 text-3xl font-bold md:text-5xl">
          {movie.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Star size={17} fill="#fbbf24" color="#fbbf24" />
            {Number(movie.vote_average || 0).toFixed(1)}/10
          </span>
          <span>{year}</span>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200">
          {movie.overview || "Discover this featured movie on MovieVerse."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              window.open(
                `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " official trailer")}`,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold hover:bg-indigo-500"
          >
            <Play size={17} fill="currentColor" />
            Watch Trailer
          </button>

          <button
            onClick={() => setSaved(!saved)}
            className="flex items-center gap-2 rounded-lg border border-slate-500 px-4 py-3 text-sm hover:bg-white/10"
          >
            <Plus size={18} />
            {saved ? "Added to Watchlist" : "Add to Watchlist"}
          </button>

          <button
            onClick={() => setFavorite(!favorite)}
            aria-label="Toggle favorite"
            className="rounded-lg border border-slate-500 px-3 hover:bg-white/10"
          >
            <Heart
              size={19}
              fill={favorite ? "#ec4899" : "none"}
              color={favorite ? "#ec4899" : "currentColor"}
            />
          </button>
        </div>
        <Link
          to={`/movie/${movie.id}`}
          className="mt-4 inline-block text-xs text-indigo-300 hover:underline"
        >
          Explore movie
        </Link>
      </div>
    </section>
  );
}
