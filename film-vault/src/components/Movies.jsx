import MovieCard from "./MOvieCard";

const Movies = () => {
  return (
    <>
      <div>
        <div className="text-2xl font-bold text-center p-5 m-5">
          Trending Movies
        </div>
        <div className="flex flex-wrap gap-6 p-4 justify-center">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default Movies;
