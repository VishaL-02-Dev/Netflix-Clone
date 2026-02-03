import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <MovieList title="Trending Now" />
    </div>
  );
};

export default Landing;
