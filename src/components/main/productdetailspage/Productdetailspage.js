import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../navigation/Navbar/Navbar';
import Upnav from '../../navigation/Upnav/Upnav';
import Shoppingcart from '../../side/shoppingcart/Shoppingcart';
import Productsdetail from '../Productdetail/Productsdetail';



const Productdetailspage = ({match}) => {
    console.log(match)
    return ( <>
    
    <Shoppingcart />

    <Upnav />
    <Navbar />
    <Productsdetail title={match.params.name} newvalue={match.params.price} />

    <br />
    <br />
    <br />
    <br />
    <br />
    
    <Footer />
    
    
    
    
    </> );
}
 
export default Productdetailspage;