import { Star, Play, Plus, Heart } from "lucide-react";
import { useState } from "react";
function Hero() {
    return (
      <section className="relative flex min-h-[390px] bg-black-500 items-center overflow-hidden bg-cover bg-center md:min-h-[450px]">
        <div className="max-w-2xl px-6 py-12 md:px-12"></div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
          FEATURED
        </span>
        <h1 className="mt-5 text-3xl font-bold md:text-5xl">{movies.title}</h1>
        <div className="flex flex-wrap mt-4 text-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Star size={17} fill="#fbbf24" color="#fbbf24" />
            {number}
          </span>
          <span>{year}</span>
        </div>
        <p className="max-w-xl mt-4 text-sm leading-6 text-slate-200">
          {movie.overview}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
         <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm text-white font-semibold hover:bg-indigo-500">
            <Play size={20}/>Watch Trailer
         </button>
         <button className="flex items-center gap-2 rounded-lg border-slate-500 px-5 py-3 text-sm text-slate-100 font-semibold hover:text-blue-200">
            <Plus size={17}/>
            Add to Watchlist
         </button>
         <button className="flex items-center gap-2 rounded-lg border-slate-500 px-5 py-3">
            <Heart size={17}/>
         </button>
        </div> 
      </section>
    );
} 
export default Hero;