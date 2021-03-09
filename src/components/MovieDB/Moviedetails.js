import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useHistory } from "react-router-dom";
import "./main.css";
// import logo from "./not.png";
import Axios from 'axios'

const Moviedetails = ({ match }) => {
  const [movie, setmovie] = useState({});
  const history = useHistory();

  const backclick = () => {
    history.replace('/movie');
  };
  console.log(match.params.id);
  const apikey = process.env.REACT_APP_API;
  

  useEffect(() => {
    Axios({
        url: `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apikey}`
    }).then(response => {
        setmovie(response.data)
        console.log(response)
        })
    },[])

    const imageurl = movie.poster_path;

  return (
    <>
      <Nav />
      <div className="movie-details-wrapper">
        <div onClick={backclick} className="back">
          Go Back
        </div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={`https://image.tmdb.org/t/p/w185${imageurl}`} />
          </div>

          <div className="movie-descreption">
            <div className="movie-title">{movie.original_title}</div>
            <div className="movie-time">{movie.release_date}</div>
            <div className="movie-text">
              <p> {movie.overview}.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviedetails;
