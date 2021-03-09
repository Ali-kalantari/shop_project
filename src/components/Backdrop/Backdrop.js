import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Backdrop.css";

const Backdrop = (props) => {
  const style = { display: "none", height: "0px" };
  if (props.isback) {
    style.display = "flex";
  }

  return (
    <div style={style} className="wrapper">
      <div className="background">
        <div className="close-drop" onClick={props.closeback}>
          X
        </div>

        <div className="tools-drop">
          <Link className="link-drop" to="/cal">
            {" "}
            ماشین حساب{" "}
          </Link>

          <Link className="link-drop" to="/stop">
            {" "}
            کرنومتر{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    isback: state.isback,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    closeback: () => dispatch({ type: "closeback" }),
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Backdrop);
