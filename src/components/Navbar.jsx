import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
function Navbar() {
  return (
    <header className="sticky top-0 z-0 border-slate-800 border-b bg-[#030d16] flex items-center px-5 py-12 ">
      <div className="min-h-[56px] flex mt-6 flex items-center ">
        
        <button className="text-600 text-white ">
          <Menu size={20}/>
        </button>
        <h1 className="text-2xl font-bold">Movie Explorer</h1>
      </div>

      <div className="flex items-center gap-6">
        <a href="" className="hover:text-blue-400">
          Home
        </a>
        <a href="" className="hover:text-blue-400">
          Movies
        </a>
        <a href="/watchlist" className="hover:text-blue-400">
          Watchlist
        </a>
        <a href="/favorites" className="hover:text-blue-400">
          Favorites
        </a>
      </div>
    </header>
  );
}
export default Navbar;