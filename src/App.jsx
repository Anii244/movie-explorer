import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
function App(){
  return(
    <main className="min-h-screen bg-[#030d16] text-white">
      <Navbar/>
      <Hero/>
    </main>
  );
}
export default App;