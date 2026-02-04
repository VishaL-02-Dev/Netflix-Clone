import { useEffect, useState } from "react";
import { tmdbFetch } from "../api/tmdb";
import type { Movie } from "../components/movie";

type MovieListProps = {
    title: string;
    endpoint: string;
};

const MovieList = ({ title, endpoint }: MovieListProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await tmdbFetch(endpoint);
                setMovies(data.results);
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };

        fetchMovies();
    }, [endpoint]);

    return (
        <section className="px-6 mt-6">
            <h2 className="text-xl font-semibold  mb-4">{title}</h2>

            <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="min-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title || movie.name}
                            className="rounded-md"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MovieList;
