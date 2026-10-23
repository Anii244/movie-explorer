import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import {getMovies} from "./services/MovieApi";
const sections = [
  {
    id: "trending",
    title: "Trending Now",
    subtitle: "The most popular movies right now",
  },
  {
    id: "popular",
    title: "Popular Movies",
    subtitle: "Movies audiences are watching",
  },
  {
    id: "top_rated",
    title: "Top Rated Movies",
    subtitle: "Highest-rated movies of all time",
  },
  {
    id: "upcoming",
    title: "Upcoming Movies",
    subtitle: "Movies scheduled for release",
  },
  {
    id: "now_playing",
    title: "Now Playing",
    subtitle: "Movies currently in theatrical release",
  },
];
export default function Home() {
  const [movies, setMovies] = useState({});
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    async function loadMovies() {
      try {
        setLoading(true);
        setError("");
        const results = await Promise.all(
          sections.map(async (section) => {
            const data = await getMovies(section.id);
            return [section.id, data];
          })
        );
        if (!active) return;
        const movieData = Object.fromEntries(results);
        setMovies(movieData);
        setFeatured(movieData.trending?.[0] || null);
      } catch (err) {
        if (active) {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    loadMovies();
    return () => {
      active = false;
    };
  }, []);
  if (loading) {
    return (
      <p className="px-6 py-20 text-center text-slate-300">
        Loading movies...
      </p>
    );
  }
  if (error) {
    return (
      <div className="px-6 py-20 text-center">
        <p className="text-red-400">{error}</p>
        <p className="mt-2 text-sm text-slate-400">
          Check your API key and internet connection, then refresh.
        </p>
      </div>
    );
  }
  return (
    <main>
      <Hero movie={featured} />
      {sections.map((section) => (
        <MovieSection
          key={section.id}
          {...section}
          movies={movies[section.id] || []}
        />
      ))}
    </main>
  );
}
