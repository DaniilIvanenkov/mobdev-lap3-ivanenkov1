import { IMovie } from "../../entity/movie/movie.rdo"
import Movie from "../Movie/Movie"
import './Feed.css'

const Feed= ({myvi}: {myvi: IMovie[]}) =>{
    return (
        <div className="feed">
            {myvi.map((movie)=> <Movie key={movie.imdbID} {...movie}/> )}
        </div>
    )
}

export default Feed