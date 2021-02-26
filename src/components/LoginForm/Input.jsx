import React,{useState, forwardRef,} from "react";
import './LoginForm.css'

const Input = (props) => {
    const[value,setvalue]=useState("");

    const handlechange = event =>{
        setvalue(event.target.value);
        props.onChange(event.target.name , event.target.value)
    }


  return (
    <div>
      <input
        placeholder={props.placeholder ||""}
        name={props.name || ""}
        type={props.type}
        value={props.value ? props.value : value}
        onChange={(event) => handlechange(event)}
      >

      </input>
    </div>
  );
};

Input.defultProps={
    value : "",
    type  : "text",
    name :""
}

export default Input;
