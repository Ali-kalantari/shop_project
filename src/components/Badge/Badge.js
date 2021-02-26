import React from 'react';
import { connect } from "react-redux";

import './Badge.css'



const Badge = (props) => {
    // const style={display:'none'};
    // if(props.isback){
    //     style.display = 'block'
    // }
    // props.isback === true ? style.display ='block' :  style;


    return (
         <div  onClick={props.openback} className='hex tools'>
    </div> );
}


const mapstatetoprops = (state) => {
    return {
      isback: state.isback,
    };
  };
  
  const mapdispatchtoprops = (dispatch) => {
    return {
      openback: () => dispatch({ type: "openback" }),
    };
  };
 
export default connect(mapstatetoprops , mapdispatchtoprops)(Badge);