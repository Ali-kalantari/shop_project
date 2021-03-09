import React from 'react';
import Movie from './Movie'
import './main.css'

const Movielist = (props) => {
    return (<React.Fragment>
        <div className='row rowmian mt-5'>
            {props.movies.map((item,index)=>{
                return(
                    <Movie id={item.id} key={index} image={item.poster_path}/>
                    )
                })}
       
        </div>
        <br />
        <br />
        <br />
        <br />
        </React.Fragment>
    );
    
}
 
export default Movielist;