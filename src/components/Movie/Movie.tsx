import { Navigate, useNavigate } from "react-router"
import { IMovie } from "../../entity/movie/movie.rdo"
import Button from "../Button/Button";


import "./Movie.css"


const Movie = ({Poster,Title,Type,Year,imdbID}:IMovie) => {
  const navigate = useNavigate();


  return (
    <div className="divmovie">
      <img src={Poster}></img>
      <div className="text-items"></div>
      <p className="title">{Title}</p>
      <p className="years">{Year}</p>
      <p className="type">{Type}</p>
      <Button onClick={() => navigate("/movie/"+imdbID)}> Перейти на фильм</Button>
      
    </div>
  )
}

export default Movie