import React, { useState } from "react";
import "./header.css";
import { connect } from "react-redux";
import logo from "./../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isopen, setisopen] = useState(false);
  const [menuclass, setmenuclass] = useState("togglemenu");
  const [navclass, setnavclass] = useState("toggle-nav");

  const handletoggle = () => {
    if (isopen) {
      setnavclass("toggle-nav active");
      setmenuclass("togglemenu active");
      setisopen(false);
    } else {
      setmenuclass("togglemenu");
      setnavclass("toggle-nav");
      setisopen(true);
    }
  };

  return (
    <React.Fragment>
      <header className="main-header">
        <div className="nav-container">
          <nav className="navbar">
            <Link className="logo">
              {" "}
              <img src={logo}></img>
            </Link>

            <div onClick={handletoggle} className={menuclass}>
              <span className="three-line"></span>
            </div>

            <div className={navclass}>
              <ul>
                <li>
                  <Link className="nav-linksian" to="/login">
                    ورود
                  </Link>
                </li>
                <li>
                  <Link className="nav-linksian" to="/">
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link className="nav-linksian">ارتباط با ما</Link>
                </li>
                <li>
                  <Link className="nav-linksian" to="/">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link className="nav-linksian" to="/movie">
                  جست و جوگرفیلم
                  </Link>
                </li>
                <li>
                  <button onClick={props.open} className="cart">
                    سبد من
                  </button>
                </li>
              </ul>
            </div>

            <ul className="nav-menu">
              <li>
                <button onClick={props.open} className="nav-links cart">
                  سبد من
                </button>
              </li>
              <li>
                <Link onClick={props.oncontact} className="nav-links">
                  ارتباط باما
                </Link>
              </li>
              <li>
                <Link to='/movie' className="nav-links">جست و جوگرفیلم</Link>
              </li>
              <li>
                <Link className="nav-links">درباره ما</Link>
              </li>
              <li>
                <Link to="/" className="nav-links">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-links nav-links-btn">
                  {" "}
                  ورود{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapstatetoprops = (state) => {
  return {
    ctr: state.isopen,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    open: () => dispatch({ type: "open" }),
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Navbar);
