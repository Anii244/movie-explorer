import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X,Clapperboard,Search,Bell,ChevronDown,UserRound,Settings,CircleHelp,LogOut } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies/trending" },
    { name: "Watchlist", path: "/watchlist" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#030b13]/95 backdrop-blur-md">
      <div className="flex min-h-[58px] items-center gap-4 px-4 md:gap-6 md:px-6">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="shrink-0 text-white hover:text-indigo-400"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <Clapperboard
            size={23}
            className="text-indigo-500"
          />
          <span className="text-lg font-bold tracking-tight">
            Movie<span className="text-indigo-400">Verse</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="whitespace-nowrap border-b-2 border-transparent py-5 text-xs text-slate-300 transition hover:border-indigo-500 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (search.trim()) {
              window.location.href =
                `/movies/trending?search=${encodeURIComponent(search.trim())}`;
            }
          }}
          className="ml-auto flex min-w-0 max-w-md flex-1 items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3 py-2"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies, actors, genres..."
            className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-slate-400"
            aria-label="Search movies"
          />
          <button type="submit" aria-label="Search">
            <Search
              size={18}
              className="shrink-0 text-slate-400 hover:text-white"
            />
          </button>
        </form>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative hidden shrink-0 text-slate-300 hover:text-white sm:block"
        >
          <Bell size={20} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2"
            aria-label="Toggle profile menu"
            aria-expanded={profileOpen}
          >
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Profile"
              className="h-8 w-8 rounded-full border border-slate-600 object-cover"
            />
            <ChevronDown
              size={14}
              className="hidden text-slate-300 sm:block"
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-12 w-56 rounded-xl border border-slate-700 bg-[#101b27] p-3 shadow-2xl">
              <div className="mb-2 flex items-center gap-3 border-b border-slate-700 pb-3">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt=""
                  className="h-9 w-9 rounded-full"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Alex Carter</p>
                  <p className="truncate text-xs text-slate-400">
                    alex@example.com
                  </p>
                </div>
              </div>

              {[
                { name: "Profile", Icon: UserRound },
                { name: "Settings", Icon: Settings },
                { name: "Help & Support", Icon: CircleHelp },
                { name: "Logout", Icon: LogOut },
              ].map(({ name, Icon }) => (
                <button
                  key={name}
                  onClick={() => setProfileOpen(false)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-sm hover:bg-slate-800 ${
                    name === "Logout" ? "text-red-400" : "text-slate-200"
                  }`}
                >
                  <Icon size={17} />
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#091420] p-4 shadow-xl">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
