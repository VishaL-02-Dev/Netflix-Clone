type MovieListProps = {
    title: string;
};

const MovieList = ({title}: MovieListProps) => {
    return (
        <section className="px-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="min-w-[160px] h-[240px] bg-zinc-800 rounded-md hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>
        </section>
    );
}
export default MovieList;