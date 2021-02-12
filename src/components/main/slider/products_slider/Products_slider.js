import React from 'react';
import Carousel from 'react-elastic-carousel'
import Product_slider from './../../product/Product_slider';
import './Products_slider.css'
import Item from './Item'

const products =[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6}
]



const breakPoints =[
    {width: 1 , itemsToShow:1},
    {width: 550 , itemsToShow:2},
    {width: 768 , itemsToShow:3},
    {width: 1200 , itemsToShow:3,itemsToScroll:2}
]
const Products_slider = (props) => {
    return ( <>
    <div className='headline'>
        <span>محصولات پر فروش</span>
    </div>
    {/* enableAutoPlay autoPlaySpeed={200} //  */}
    <Carousel isRTL={true} breakPoints={breakPoints} >
     
        {products.map((item,index)=>{
            return(
            <Product_slider
            key={item.id} />
            )
        })}
    </Carousel>
    </> );
}
 
export default Products_slider;