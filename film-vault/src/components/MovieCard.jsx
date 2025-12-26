function MovieCard({
  poster_path,
  name,
  rating,
  handleAddToWatchList,
  movieObj,
  handleRemoveFromWatchlist,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
      <div className="w-[260px] md:w-[320px]">
        <div
          className="
    relative
    h-[50vh]
    bg-cover bg-center
    rounded-2xl
    overflow-hidden
    transition-transform duration-300
    hover:scale-105
    cursor-pointer
  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        >
          {doesContain(movieObj) ? (
            <div
              onClick={() => handleRemoveFromWatchlist(movieObj)}
              className="
      absolute top-4 right-4
      h-9 w-9
      flex items-center justify-center
      rounded-full
      bg-[#f5efe6]/90
      backdrop-blur-md
      shadow-sm
    "
            >
              <i className="fa-solid fa-bookmark"></i>
            </div>
          ) : (
            <div
              onClick={() => handleAddToWatchList(movieObj)}
              className="
      absolute top-4 right-4
      h-9 w-9
      flex items-center justify-center
      rounded-full
      bg-[#f5efe6]/90
      backdrop-blur-md
      shadow-sm
    "
            >
              <i className="fa-regular fa-bookmark text-gray-800 text-sm"></i>
            </div>
          )}
        </div>

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
