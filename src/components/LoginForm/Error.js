import React from 'react';

import './LoginForm.css'

const Error = props => {
    if(props.error){
        return(<div className='error-login'>
        {props.error}
    </div> )
    }
    else{return("")}
     
        
             
}
 
export default Error;