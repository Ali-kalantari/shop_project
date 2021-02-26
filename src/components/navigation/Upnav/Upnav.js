import React from "react";
import "./header.css";
import {Link} from "react-router-dom"
const Upnav = () => {
  return (
    <div className="main">
      <p>
        <Link to="/">تخفیف های آخر ماه</Link>
      </p>
    </div>
  );
};

export default Upnav;
