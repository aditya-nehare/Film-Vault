import { useEffect, useState } from "react";
import genreId from "../utils/genre";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currentGenre, setCurrenetGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortIncreasing]);
  };

  let sortDecreasing = () => {
    let sortDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortDecreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreId[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genre", ...new Set(temp)]);
    console.log(temp);
  }, [watchList]);

  let handleFilter = (genre) => {
    setCurrenetGenre(genre);
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
            {genreList.map((genre) => (
              <div
                key={genre}
                onClick={() => handleFilter(genre)}
                className={
                  currentGenre === genre
                    ? "h-10 px-6 rounded-full bg-black text-gray-100 text-sm flex items-center cursor-pointer"
                    : "h-10 px-6 rounded-full bg-[#f5efe6] text-gray-800 text-sm flex items-center cursor-pointer hover:bg-black/10 transition"
                }
              >
                {genre}
              </div>
            ))}
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
                  <div className="flex items-center gap-3">
                    <span>Rating</span>

                    <div
                      onClick={sortDecreasing}
                      className="
        flex items-center gap-1
        px-2 py-1
        rounded-full
        bg-[#f5efe6]
        text-xs
        text-gray-700
        cursor-pointer
      "
                    >
                      <i className="fa-solid fa-arrow-up"></i>
                    </div>

                    <div
                      onClick={sortIncreasing}
                      className="
        flex items-center gap-1
        px-2 py-1
        rounded-full
        bg-[#f5efe6]
        text-xs
        text-gray-700
        cursor-pointer
      "
                    >
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
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
                  if (currentGenre === "All Genre") {
                    return true;
                  } else {
                    return genreId[movieObj.genre_ids[0]] === currentGenre;
                  }
                })
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
                            src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                            alt=""
                          />
                          <h4 className="text-base font-medium text-gray-900">
                            {movieObj.title}
                          </h4>
                        </div>
                      </td>
                      <td className="px-9 py-6 text-sm text-gray-800">
                        {movieObj.vote_average}
                      </td>
                      <td className="px-6 py-6 text-sm text-gray-800">
                        {genreId[movieObj.genre_ids[0]]}
                      </td>
                      <td className="px-7 py-6 text-right">
                        <span
                          onClick={() => {
                            handleRemoveFromWatchlist(movieObj);
                          }}
                          className="text-sm font-medium text-red-500 cursor-pointer"
                        >
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
