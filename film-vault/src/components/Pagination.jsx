function Pagination({ handelPrev, handleNext, pageNo }) {
  return (
    <div>
      <div className="flex justify-center my-8">
        <div
          className="
      flex items-center gap-6
      px-6 py-3
      rounded-full
      bg-[#f5efe6]
      shadow-md
    "
        >
          <button
            onClick={handelPrev}
            className="
        text-sm font-medium
        text-gray-700
        hover:text-black
        transition
      "
          >
            Prev
          </button>

          <div className="flex items-center gap-3">
            <span
              className="
          w-8 h-8
          flex items-center justify-center
          rounded-full
          bg-black
          text-white
          text-sm font-medium
        "
            >
              {pageNo}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="
        text-sm font-medium
        text-gray-700
        hover:text-black
        transition
      "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
