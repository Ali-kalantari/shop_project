import React from 'react';
import './Productsdetail.css'
import logo from './../../../images/anar.jpg'





const Productsdetail = (props) => {
    return (<div className="shop-detail-box-main">
        <div className='container'>
            <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-6'>
                    <img src={props.img || logo}></img>
                </div>

            {/*  */}
                <div className='col-xl-7 col-lg-7 col-md-6'>
                    <div className='single-product-details'>
                        <h2>{props.title}انار فله</h2>
                        <h5>
                            <del>{props.oldvalue}5000</del>
                            {props.newvalue}
                            تومان
                            4800
                                                    
                         </h5>
                        <h4>
                          :توضیحات 
                        </h4>
                        <p>{props.description} .انار، میوه‌ای که از خاورمیانه و شمال هند برخاسته است، از زیباترین و شگفت‌انگیزترین میوه‌هاست. در فرهنگ ایرانی اسلامی انار را میوه‌ای بهشتی می‌دانند. از انار مشتقات زیادی مانند آب انار، رب انار، لواشک و مربا می‌گیرند.</p>
                        <div className='price-box-bar'>
                            <div className='cart-and-buy-btn'>
                                <button className='add-to-cart'>
                                    اضافه کردن به سبد خرید
                                </button>
                            </div>
                        </div>
                        <div className='add-to-btn'>
                            <div className='add-comb'>
                                <button className='add-to-favorite'>اضافه به علاقه مندی ها</button>
                            </div>
                            <div className='share-bar'>
                                <button className='add-to-share'>اشتراک گذاری</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>);
}
 
export default Productsdetail;