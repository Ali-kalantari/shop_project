import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../navigation/Navbar/Navbar';
import Upnav from '../../navigation/Upnav/Upnav';
import Shoppingcart from '../../side/shoppingcart/Shoppingcart';
import Productsdetail from '../Productdetail/Productsdetail';



const Productdetailspage = ({match,history}) => {
    return ( <>
    
    <Shoppingcart />

    <Upnav />
    <Navbar />
    <Productsdetail />

    <br />
    <br />
    <br />
    <br />
    <br />
    
    <Footer />
    
    
    
    
    </> );
}
 
export default Productdetailspage;