import type { Movie } from "./movie";

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className="min-w-[160px] cursor-pointer transition-transform hover:scale-105">
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="rounded-md"
            />
        </div>
    );
};

export default MovieCard;
