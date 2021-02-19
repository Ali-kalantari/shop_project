import React from 'react';

const Display = (props) => {

    return ( <>
    <div className='wrap-stop'>
    <span className='watch-box'>{(props.time.ms) >= 10 ? props.time.ms : '0'+props.time.ms}</span>
    <span className='watch-box'>{(props.time.s) >= 10 ? props.time.s : '0'+props.time.s}</span>
    <span className='watch-box'>{(props.time.m) >= 10 ? props.time.m : '0'+props.time.m}</span>
    <span className='watch-box'>{(props.time.h) >= 10 ? props.time.h : '0' +props.time.h}</span>
    </div>
    {(props.status === 0)?
         <div>
            <button onClick={props.start} className=' btn-info btn-customs'>start</button>
        </div> : ""
    }


        {(props.status === 1 )? 
        <div>
        <button onClick={props.stop} className=' btn-danger btn-custom'>stop</button>
        <button onClick={props.reset} className=' btn-success btn-custom'>reset</button>
         </div>: "" }

         {props.status === 2 ? 
         <div>
             <button onClick={props.reset} className=" btn-success btn-custom">reset</button>
             <button onClick={props.resume} className=" btn-info btn-custom">resume</button>
         </div> : ''}
         
    




    
    </> );
}
 
export default Display;