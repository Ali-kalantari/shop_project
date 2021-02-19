import React from "react";
import "./../Calculator.scss";

const Button = (props) => {
  if (props.id === undefined) {
    return (
      <div
        onClick={props.click.bind(this, props.children)}
        className="button-cal"
      >
        {props.children}
      </div>
    );
  }

  if (props.id === "op") {
    return (
      <div
        onClick={props.click.bind(this, props.children)}
        className="button-op"
      >
        {props.children}
      </div>
    );
  }
  
  
  if (props.id === "equal"  ) {
    return (
      <div onClick={props.equal} className="button-equal">
        {props.children}
      </div>
    );
  }
//   if(props.id==="equal" && props.input.lenght === 0){
//       return(
//           <div className='button-equal'>{props.children}</div>
//       )
//   }
};

export default Button;
