import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const res = await getPopularMovies(1);
        const movies = res.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Banner fetch failed", error);
      }
    };

    fetchBannerMovie();
  }, []);

  return (
    <div className="px-4 md:px-8 pb-6">
      <div
        className="
          relative
          h-[40vh] md:h-[85vh]
          rounded-b-3xl
          overflow-hidden
          flex items-end
          bg-black
        "
      >
        {movie?.backdrop_path && (
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className={`
              absolute inset-0
              w-full h-full
              object-cover
              transition-opacity duration-700 ease-out
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setLoaded(true)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-900" />
        )}

        <h1
          className="
            relative z-10
            px-6 md:px-16 pb-6 md:pb-12
            text-white
            text-3xl md:text-6xl lg:text-7xl
            font-bold
            tracking-tight
            drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]
          "
        >
          {movie?.title || movie?.name || ""}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
