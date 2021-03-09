import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category_component = (props) => {
  return (
    <>
      <div className="containerian">
        <img className="img" src={props.img}></img>
        <Link className="anchor" to="/productslist">
          {props.children}
        </Link>
      </div>
    </>
  );
};

export default Category_component;
