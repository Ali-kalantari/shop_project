import React from 'react';
import "./header.css"
import {connect} from 'react-redux'
import logo from "./../../../images/logo.png"
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (<React.Fragment>
        
     <header className="main-header">

         <div className="nav-container">
			<nav className="navbar">
				<Link className="logo"> <img src={logo}></img></Link>

				<ul className="nav-menu">
					<li><button onClick={props.open} className="nav-links cart">سبد من</button></li>
					<li><Link href="#" className="nav-links">ارتباط باما</Link></li>
					<li><Link href="#" className="nav-links">خدمات</Link></li>
					<li><Link href="#" className="nav-links">درباره ما</Link></li>
					<li><Link href="#" className="nav-links">صفحه اصلی</Link></li>
					<li><Link href="#" className="nav-links nav-links-btn"> ورود </Link></li>
				</ul>
                </nav>
                </div>    
        
    </header> 
    </React.Fragment>);
};

const mapstatetoprops = (state) =>{
    return{
        ctr : state.isopen
    }

};

const mapdispatchtoprops = (dispatch) =>{
    return{
        open : () => dispatch ({ type : "open"})
        
    }

 };

export default connect(mapstatetoprops,mapdispatchtoprops)(Navbar);