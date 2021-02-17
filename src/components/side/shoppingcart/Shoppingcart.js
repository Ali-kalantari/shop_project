import React, { useState } from 'react';
import{connect} from 'react-redux'
import './Shoppingcart.css'
import { Link } from 'react-router-dom';

import logo from './../../../images/sabzi.jpg'

const Shoppingcart = (props) => {

    const style={display : 'none'}
    if(props.ctr === true) {
        style.display = 'block'
        style.transition = 'left 10s ease-in-out '
        style.left = '0px'
    }

    const [user_cart,setuser_cart] = useState([]);

    let LS = localStorage.getItem('user_cart')

    if(LS){
        // const products = JSON.parse(localStorage.getItem('user_cart'))
        // const new_user_cart = [...user_cart]
        // new_user_cart.push(products)
        // setuser_cart(new_user_cart)
        

    return ( <div className="side" style={style}>

    <button className=" btn btn-sm closeshoppingcart" onClick={props.close}>
        <li>بستن</li>
    </button>
    <li className="cart-box">
        <ul className="cart-list">

            {/* will generate by js */}
            <li>
                <Link className="photo">
                    <img alt="sabzi" src={props.imagecart||logo} className="cart-thumb"></img>
                </Link>
                <h6>سبزی خوردن</h6>
                <p>1x - <span className="price">80$</span></p>

            </li>
            {user_cart.map((item,index)=>{
                <li key={item.id}>
                    <Link>
                    <img alt='sabzi' src={logo} className='cart-thumb'></img>
                    </Link>
                    <h6>{item.title}</h6>
                    <p>{item.num}x - <span className='price'>{item.price}</span> </p>

                </li>
            })}
            
            {/* will generate by js */}


            <li className="total">
                <button className="viewcart">مشاهده سبد</button>
                <span>total : 15$</span>
            </li>

        </ul>

    </li>
</div> );
}

        


else{
    return (
        <div className="side" style={style}>

    <button className=" btn btn-sm closeshoppingcart" onClick={props.close}>
        <li>بستن</li>
    </button>
    <h2>سبد خالی است</h2>
    </div>

    )
}
}
const mapstatetoprops = (state) =>{
    return{
        ctr : state.isopen
    }

};


const mapdispatchtoprops = (dispatch) =>{
    return{
        close : () => dispatch ({ type : "close"})
        
    }

 };


export default connect(mapstatetoprops,mapdispatchtoprops)(Shoppingcart);