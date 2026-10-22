function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Movie Explorer
      </h1>
      <div className="flex items-center gap-6">
        <a href="/" className="hover:text-blue-400">
          Home
        </a>
        <a href="/watchlist" className="hover:text-blue-400">
          Watchlist
        </a>
        <a href="/favorites" className="hover:text-blue-400">
          Favorites
        </a>
      </div>
    </nav>
  );
}
export default Navbar;