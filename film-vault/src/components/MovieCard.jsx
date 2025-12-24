function MovieCard({ poster_path, name, rating }) {
  return (
    <>
      <div className="w-[260px] md:w-[320px]">
        <div
          className="
          h-[50vh]
          bg-cover bg-center
          rounded-2xl
          transition-transform duration-300
          hover:scale-105
          cursor-pointer
        "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        ></div>

        <div
          className="
    mt-2
    px-3 py-2
    rounded-xl
    bg-[#f5efe6]
    flex items-center justify-between
    gap-3
  "
        >
          <p className="text-sm md:text-base font-medium text-gray-900 truncate">
            {name}
          </p>

          <p className="text-sm md:text-base font-medium text-gray-900 shrink-0">
            rating: {rating}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
