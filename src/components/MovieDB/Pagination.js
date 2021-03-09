import React from "react";
import "./main.css";

const Pagination = (props) => {
  const pagelinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentpage === i ? "active" : "";

    pagelinks.push(
      <li
        onClick={props.nextpage.bind(this, i)}
        className={`page-item ${active}`}
        key={i}
      >
        <a className="page-link">{i}</a>
      </li>
    );
  }
  return (
    <div className="container">
      <ul class="pagination">
      {props.currentpage >1 ? (
          <li
            onClick={props.nextpage.bind(this,props.currentpage -1)}
            className={`page-item`}
            
          >
            <a className="page-link">PREVIOS</a>
          </li>
        ) : (
          ""
        )}

        {pagelinks}
        {props.currentpage > 0 ? (
          <li
            onClick={props.nextpage.bind(this,props.currentpage +1)}
            className={`page-item `}
            
          >
            <a className="page-link">NEXT</a>
          </li>
        ) : (
          ""
        )}

        
      </ul>
    </div>
  );
};

export default Pagination;
