import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import OMDB from "../../shared/api";
import { IMoviefilm } from "../../entity/movie/movie.rdo";
import Button from "../Button/Button";
import "./Clickmovie.css"
const Click = () => {
  const [movie, setMovie] = useState<IMoviefilm>();
  const { id } = useParams();

  useEffect(() => {
    // console.log("imdbID" + params.imdbID);
    const fetchMovie = async () => {
      if (id) {
        const infoid = await OMDB.Id(id)
        setMovie(infoid)
      }
    };
    fetchMovie()
  }, []);

  const navigate = useNavigate();

  return (
    <div className="full">
      {movie && (
        <div className="content">
          <img className="ymom" src={movie.Poster} />
          <div className="txt">
            <h2>Title: {movie.Title} </h2>
            <h2>Year: {movie.Year}</h2>
            <h2>Type: {movie.Type}</h2>
            <h2>Actor: {movie.Actors}</h2>
            <h2>Genre: {movie.Genre}</h2>
            <h2>Language: {movie.Language}</h2>
            <h2>Writer: {movie.Writer}</h2>
            <Button className="cls" onClick={() => navigate(-1)}>ymom bratyha vali otsyuda 52</Button>
          </div>
        </div>
      )}
    </div>

  )
}
export default Click