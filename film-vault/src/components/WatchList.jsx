import { useState } from "react";

function WatchList({ watchList }) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] pb-20">
      <div className="flex justify-center mb-12 px-4 pt-18">
        <div
          className="
            flex flex-col md:flex-row
            items-center gap-4
            px-6 py-4
            rounded-3xl
            bg-white
            shadow-lg
            max-w-4xl w-full
          "
        >
          <input
            onChange={handleSearch}
            value={search}
            type="text"
            placeholder="Search movies"
            className="
              h-11
              w-full md:w-72
              rounded-full
              px-5
              bg-[#f5efe6]
              text-sm
              outline-none
              placeholder-gray-500
            "
          />

          <div className="flex gap-3 flex-wrap justify-center">
            <div className="h-10 px-6 rounded-full bg-black text-white text-sm flex items-center">
              Action
            </div>
            <div className="h-10 px-6 rounded-full bg-[#f5efe6] text-gray-800 text-sm flex items-center">
              Comedy
            </div>
            <div className="h-10 px-6 rounded-full bg-[#f5efe6] text-gray-800 text-sm flex items-center">
              Drama
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <div
          className="
            w-full max-w-6xl
            rounded-3xl
            bg-white
            shadow-xl
            overflow-hidden
          "
        >
          <table className="w-full text-left">
            <thead className="bg-[#f5efe6]">
              <tr>
                <th className="px-8 py-5 text-sm font-semibold text-gray-700">
                  Movie
                </th>
                <th className="px-6 py-5 text-sm font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-5 text-sm font-semibold text-gray-700">
                  Genre
                </th>
                <th className="px-8 py-5 text-sm font-semibold text-gray-700 text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {watchList
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
                .map((movieObj) => {
                  return (
                    <tr className="border-t hover:bg-[#faf7f2] transition">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <img
                            className="h-36 w-24 rounded-xl object-cover"
                            src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                            alt=""
                          />
                          <h4 className="text-base font-medium text-gray-900">
                            {movieObj.title}
                          </h4>
                        </div>
                      </td>
                      <td className="px-9 py-6 text-sm text-gray-800">
                        {" "}
                        {movieObj.vote_average}
                      </td>
                      <td className="px-6 py-6 text-sm text-gray-800">-</td>
                      <td className="px-7 py-6 text-right">
                        <span className="text-sm font-medium text-red-500 cursor-pointer">
                          Remove
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
