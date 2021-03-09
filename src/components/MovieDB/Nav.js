import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Nav = (props) => {
  return (
    <nav class="customian navbar justify-content-between ">
      <Link to="/" class="navbar-brand aa">
        Fresh Shop
      </Link>
      <Link to="/movie" class="navbar-brand text-danger">
        Movie Finder
      </Link>
      <form class="form-inline" onSubmit={props.handlesearch}>
        <input
        onChange={props.handlechange}
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          
        />
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
