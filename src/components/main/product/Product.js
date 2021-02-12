import React,{useState} from 'react';
import "./Product.css"
import logo from './../../../images/asal.png'
import { Link } from 'react-router-dom';




const Product = (props) => {

const counterstyle = {
  display:'none'
}
props.number > 0 ? counterstyle.display = 'block' :  counterstyle.display ='none'

const addbuttonstyle = {  display:'block'}
props.number > 0 ? addbuttonstyle.display = 'none' : addbuttonstyle.display = 'block'

  return ( <div className="card ">
    <div className="imgcard">
      <div className="count-product" style={counterstyle}>
        <button onClick={props.addproduct.bind(this,props.item)} className='btn btn-sm btn-plus'>+</button>
        <span className="counter-product">
        {props.number}
        </span>
        <button onClick={props.removeproduct.bind(this,props.item)} className='btn btn-sm btn-nega'>-</button>

      </div>
      <Link to="/productdetails">
        <img className="image" src={props.productimage||logo}>
        </img>
      </Link>
    </div>

    <div className="productdetails">
      <div className="productname" >
        {props.productname}
      </div>
      <div className="productprice">
      {props.productprice}
      <button onClick={() => props.addproduct(props.item)} style={addbuttonstyle}  className="btn btn-sm btn-danger">+</button>
      
      </div>
    </div>
  </div> );
}
 

export default Product;