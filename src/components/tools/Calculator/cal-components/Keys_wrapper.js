import React,{useState} from 'react';
import Button from './Button'

const Keys_wrapper = (props) => {

    return ( <>
    <div className='wrapper-button'>
        <Button click={props.click}>1</Button>
        <Button click={props.click}>2</Button>
        <Button click={props.click}>3</Button>
        <Button click={props.click} id='op'>+</Button>
        <Button click={props.click}>4</Button>
        <Button click={props.click}>5</Button>
        <Button click={props.click}>6</Button>
        <Button click={props.click} id='op'>-</Button>
        <Button click={props.click}>7</Button>
        <Button click={props.click}>8</Button>
        <Button click={props.click}>9</Button>
        <Button click={props.click}id='op'>/</Button>
        <Button click={props.click}>.</Button>
        <Button click={props.click}>0</Button>
        <Button equal={props.equal} input={props.input} id='equal'>=</Button>
        <Button  click={props.click} id='op'>*</Button>
        {/* <Button id='clear-cal'>CLEAR</Button> */}
        


    </div>
    
    
    </> );
}
 
export default Keys_wrapper;