import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

import logo from './../../../images/anar.jpg'

const Product_slider = (props) => {
    return (
    <div className='product-slider'>
        <div className='c-box-product'>
            <Link to='/productdetails'> 
                <img className='image-poduct' src={props.productimage || logo}></img>
            </Link>
            <div className='product-title'>
                <Link to="/productdetails" className='product-title-link'> {props.productname || 'انار فله ساوه'}</Link>
            </div>
            <div className='product-price'>
                <div className='price-item'>
                    <div className='price-item-value'>
                        {props.productprice || '3,700'}
                        <span>تومان</span>
                    </div>
                </div>
            </div>
        </div>

    </div> );
}
 
export default Product_slider;