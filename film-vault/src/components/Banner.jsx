import poster from "./Poster.jpg";

function Banner() {
  return (
    <div className="px-4 md:px-8 pb-6">
      <div
        className="
          relative
          h-[40vh] md:h-[80vh]
          bg-cover bg-center
          rounded-b-3xl
          overflow-hidden
          flex items-end
        "
        style={{
          backgroundImage: `url(${poster})`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>

        {/* Title */}
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
          ONE PIECE
        </h1>
      </div>
    </div>
  );
}

export default Banner;
