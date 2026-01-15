import axiosInstance from "./axoisInstance";

export const getPopularMovies = (page = 1) => {
  return axiosInstance.get("/movie/popular", {
    params: { page },
  });
};
