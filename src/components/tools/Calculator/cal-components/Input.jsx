import React from 'react';
import './../Calculator.scss'


const Input = props =>{
    return(
    <div className='input-cal'>
        {props.input}
    </div>)

}

export default Input;