const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = "https://api.themoviesdb.org/3";
export async function getMovies(category, page = 1) {
    if(!API_KEY){
        throw new Error("IMDB API key is missing. Check your .env file");
    }
const allowedCategories = [
    "trending",
    "popular",
    "top_rated",
    "upcoming",
    "now_playing"
];
if(!allowedCategories.includes(category)){
    throw new Error("Invalid movie category");
}
const endpoints = 
category === "trending"
? `${BASE_URL}/trending/movie/week`
: `${BASE_URL}/movie/${category}`;
const response = await fetch(
  `${BASE_URL}/movie/${category}?api_key=${API_KEY}?page=${page}`
);
if(!response.ok){
    throw new Error("Failed to fetch movies");
} 
const data = await response.json();
return data.results;
}
export async function getFeaturedMovie(){
    

}