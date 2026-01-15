import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Movies = ({
  handleAddToWatchList,
  handleRemoveFromWatchlist,
  watchList,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getPopularMovies(pageNo);
        setMovies(res.data.results);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };

    fetchMovies();
  }, [pageNo]);

  return (
    <>
      <div>
        <div className="relative p-5 m-5">
          <h2 className="text-2xl font-bold text-center">Trending Movies</h2>
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
            <Pagination
              pageNo={pageNo}
              handelPrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 p-4 justify-center">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                key={movieObj.id}
                poster_path={movieObj.poster_path}
                name={movieObj.original_title}
                rating={movieObj.vote_average}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                movieObj={movieObj}
                watchList={watchList}
              />
            );
          })}
        </div>
        <Pagination
          pageNo={pageNo}
          handelPrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </>
  );
};

export default Movies;
