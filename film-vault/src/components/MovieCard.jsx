const MovieCard = () => {
  return (
    <div
      className="
        h-[50vh] w-[260px] md:w-[320px]
        bg-cover bg-center
        rounded-2xl
        transition-transform duration-300
        hover:scale-105
        cursor-pointer
      "
      style={{
        backgroundImage:
          "url(https://4kwallpapers.com/images/walls/thumbs_3t/23032.jpg)",
      }}
    ></div>
  );
};

export default MovieCard;
