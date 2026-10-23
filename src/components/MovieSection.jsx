import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
export default function MovieSection({id,title,subtitle,movies,}) {
  const rowRef = useRef(null);
  return (
    <section id={id} className="px-5 py-6 md:px-10 lg:px-12">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold md:text-xl">{title}</h2>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
        <Link
          to={`/movies/${id}`}
          className="flex shrink-0 items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="relative">
        <div
          ref={rowRef}
          className="grid grid-flow-col auto-cols-[145px] gap-3 overflow-x-auto scroll-smooth pb-3 sm:auto-cols-[165px] lg:auto-cols-[180px]"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          onClick={() =>
            rowRef.current?.scrollBy({
              left: 500,
              behavior: "smooth",
            })
          }
          aria-label={`Scroll ${title}`}
          className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-800 p-2 shadow-lg hover:bg-indigo-600 sm:block"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
