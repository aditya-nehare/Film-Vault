import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MOvieCard";
import Pagination from "./Pagination";

const Movies = ({ handleAddToWatchList, handleRemoveFromWatchlist, WatchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const API_KEY = import.meta.env.VITE_API_KEY;

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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <>
      <div>
        <div className="text-2xl font-bold text-center p-5 m-5">
          Trending Movies
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
                WatchList={WatchList}
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
