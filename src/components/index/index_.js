import React from 'react';

import Shoppingcart from "./../side/shoppingcart/Shoppingcart";
import Navbar from "./../navigation/Navbar/Navbar"
import Upnav from "./../navigation/Upnav/Upnav"
import Slideshow from "./../main/slider/imageslider/slideshow"
import Category from './../main/category/Category';
import Products_slider from './../main/slider/products_slider/Products_slider';
import Footer from "./../Footer/Footer";
import Badge from "./../Badge/Badge";
import Backdrop from './../Backdrop/Backdrop'

const Index_ = () => {
    return ( <React.Fragment>
      <Backdrop />
      <Shoppingcart />
      <Upnav />
      <Navbar />
      <Slideshow />
      <Category />


      <Products_slider />      
      <Badge />
      <Footer />
    </React.Fragment> );
}

export default Index_;