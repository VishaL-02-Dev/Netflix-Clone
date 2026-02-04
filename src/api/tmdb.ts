const BASE_URL = "https://api.themoviedb.org/3";

export const tmdbFetch = async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("TMDB fetch failed");
    }

    return res.json();
};
