import React from 'react';
import './slide.css'
import { Slide } from 'react-slideshow-image';
import banner1 from "./../../../../images/banner-03.jpg";
import banner2 from "./../../../../images/banner-02.jpg";
import banner3 from "./../../../../images/banner-01.jpg";
import {Link} from 'react-router-dom'


const slideImages = [
    banner1,
    banner2,
    banner3
  ];
const Slideshow = () => {
    return ( <>
    
    <div className="wrap">
        <div className="opacity">
            <h1> به فروشگاه آنلاین علی
                <br />
                خوش آمدید
            </h1>
            <p> ما این امکان را فراهیم کردیم که محصولات کشاورزی به صورت تازه از مزرعه به خونه شما برسه 
                <br />
                همین حالا خریدت رو شروع کن
            </p>
            <Link to="/productslist" className="product btn btn.danger btn-lg">مشاهده محصولات</Link>

        </div>
        
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span> </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span> </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span> </span>
            </div>
          </div>
        </Slide>
      </div>

    
    
    
    </> );
}
 
export default Slideshow;