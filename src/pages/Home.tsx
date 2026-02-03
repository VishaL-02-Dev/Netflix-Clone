import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div className="bg-black text-white">

            <MovieList title="Trending Now" />
            <MovieList title="Top Rated" />
            <MovieList title="Action Movies" />

        </div>
    )
}
export default Home;