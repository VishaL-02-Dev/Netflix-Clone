import { useEffect, useState } from "react";
import { tmdbFetch } from "../api/tmdb";
import type { Movie } from "../components/movie";
import TrailerModal from "./TrailerModal";

type MovieListProps = {
    title: string;
    endpoint: string;
};

const MovieList = ({ title, endpoint }: MovieListProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await tmdbFetch(endpoint);
            setMovies(data.results);
        };
        fetchMovies();
    }, [endpoint]);

    const handleMovieClick = async (movieId: number) => {
        const data = await tmdbFetch(`/movie/${movieId}/videos`);
        const trailer = data.results.find(
            (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        if (trailer) {
            setTrailerKey(trailer.key);
        } else {
            alert("Trailer not available");
        }
    };

    return (
        <>
            <section className="px-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => handleMovieClick(movie.id)}
                            className="min-w-[160px] cursor-pointer transition-transform duration-300 hover:scale-110"
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

            {trailerKey && (
                <TrailerModal
                    videoKey={trailerKey}
                    onClose={() => setTrailerKey(null)}
                />
            )}
        </>
    );
};

export default MovieList;