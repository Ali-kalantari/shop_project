import React from 'react';
import not from './not.png';
import './main.css'
import { Link } from 'react-router-dom';

const Movie = (props) => {
   
    return (
     <div className='col-md-4'>
            <div className='thumbnail mt-4'>
                {
                props.image === null ? <img src={not} /> : 
                <img src={`https://image.tmdb.org/t/p/w185${props.image}`} />
                }
                <div className="caption">
            <Link to={`/movie/${props.id}`}>View details</Link>
          </div>
        </div>

    </div> );
}
 
export default Movie;