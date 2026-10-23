import { Clapperboard } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#030b13] border-t border-gray-800 text-gray-400">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-1.5">
            <Clapperboard size={19} className="text-indigo-500" />
            <h2 className="text-sm font-bold text-white">
              Movie<span className="text-indigo-500">Verse</span>
            </h2>
          </div>
          <p className="text-xs">Discover. Watch. Enjoy.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px]">
          <a href="" className="hover:text-indigo-400">
            Help
          </a>
          <a href="" className="hover:text-indigo-400">
            Terms
          </a>
          <a href="" className="hover:text-indigo-400">
            Privacy
          </a>
        </nav>
        <div className="flex items-center gap-2 text-[10px]">
          <span>Powered by</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
