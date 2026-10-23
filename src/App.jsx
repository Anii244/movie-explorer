import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030d16] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies/:category"
            element={<MovieListing />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
