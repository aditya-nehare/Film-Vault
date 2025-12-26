import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchList = watchList.filter(
      (movie) => movie.id !== movieObj.id
    );
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchList={watchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />

        <Route
          path="/watchlist"
          element={
            <>
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
