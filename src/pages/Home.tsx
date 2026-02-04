import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div className="bg-black text-white">

            <MovieList
                title="Trending Now"
                endpoint="/trending/movie/week"
            />

            <MovieList
                title="Top Rated"
                endpoint="/movie/top_rated"
            />

            <MovieList
                title="Action Movies"
                endpoint="/discover/movie?with_genres=28"
            />


        </div>
    )
}
export default Home;