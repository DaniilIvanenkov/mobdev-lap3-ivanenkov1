import axios from "axios";
import { IMovierdo, IMoviefilm } from "../entity/movie/movie.rdo";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;
const OMDBInstance = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

const OMDB = {
  getMovies: async (title: string) => {
    const res = await OMDBInstance.get<IMovierdo>("", {
      params: { apikey: API_KEY, s: title },
    });
    return res.data;
  },
  Id: async (title: string) => {
    const res2 = await OMDBInstance.get<IMoviefilm>("", {
      params: { apikey: API_KEY, i: title},
    });
    return res2.data;
  }
};
export default OMDB;
