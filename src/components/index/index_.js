import React, { useState } from "react";

import Shoppingcart from "./../side/shoppingcart/Shoppingcart";
import Navbar from "./../navigation/Navbar/Navbar";
import Upnav from "./../navigation/Upnav/Upnav";
import Slideshow from "./../main/slider/imageslider/slideshow";
import Category from "./../main/category/Category";
import Products_slider from "./../main/slider/products_slider/Products_slider";
import Footer from "./../Footer/Footer";
import Badge from "./../Badge/Badge";
import Backdrop from "./../Backdrop/Backdrop";
import Contact_backdrop from './../Backdrop/Contact_backdrop'

const Index_ = () => {
  const [isopen, setisopen] = useState(false);

  const Togglecontactbackdrop = () => {
    if(isopen === false){
      setisopen(true)
    }
    else{
      setisopen(false)
    }
  };


  return (
    <React.Fragment>
      <Contact_backdrop oncontact={Togglecontactbackdrop} isopen={isopen}/>
      <Backdrop />
      <Shoppingcart />
      <Upnav />
      <Navbar oncontact={Togglecontactbackdrop} />
      <Slideshow />
      <Category />

      <Products_slider />
      <Badge />
      <Footer />
    </React.Fragment>
  );
};

export default Index_;
