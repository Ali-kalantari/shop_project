import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import Movielist from './Movielist'
import Pagination from './Pagination'

const Movie_index = () => {
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");
  const [totalresult,settotalresult] = useState(0);
  const [current,setcurrent] = useState(1);
  const apikey = process.env.REACT_APP_API;


  useEffect(()=>{
    setTimeout(() => {
    alert("برای استفاده از جست و جو گر فیلم باید وی پی ان خود را فعال نمایید")
    }, 500);
  },[])

  const handlesearch = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}`
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setmovies([...data.results]);
        settotalresult(data.total_results)
      });
  };
  const handlechange = (e) => {
    setsearch(e.target.value);
  };
  const nextpage =(pagenumber) =>{
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}&page=${pagenumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setmovies([...data.results]);
        setcurrent(pagenumber)
      });

  }
  const numberpages = Math.floor(totalresult/20)

  return (
    <div>
      <Nav handlesearch={handlesearch} handlechange={handlechange} />
      <Movielist movies={movies} />
      {
        totalresult > 20 ? <Pagination pages={numberpages} nextpage={nextpage} currentpage={current}/> : <br />
      }
    </div>
  );
};

export default Movie_index;