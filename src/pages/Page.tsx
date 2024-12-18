import Button from "../components/Button/Button";
import "./Page.css";
import Input from "../components/Input/Input";
import { useEffect, useState } from "react";
import OMDB from "../shared/api";
import { IMovie } from "../entity/movie/movie.rdo";
import Feed from "../components/Feed/Feed";
const Page = () => {
  const [value, setValue] = useState("");
  const [myvi, setMyvi] = useState<IMovie[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMyvi((await OMDB.getMovies(value)).Search);
    handlehash()
    if (value) handlehash()

  }

  const handlehash = ()=>{
    const hashvalue = value
      window.location.assign(`${location.origin}/#` + encodeURI(hashvalue))
  }
  
  useEffect(()=>{
    const reloadMovieWithHash = async () => {
      if(location.hash) {
        setMyvi((await OMDB.getMovies(location.hash.slice(1))).Search);
      }
      setValue(location.hash.slice(1))
    }
    reloadMovieWithHash();
  },[])
  return (
    <div className="searchh">
      <div>Страница</div>
      <form onSubmit={handleSubmit}>
      <Input value={value} setValue={setValue} />
      <Button>Поиск</Button>
      </form>
      <Feed myvi={myvi} />
    </div>
  );
};

export default Page;
