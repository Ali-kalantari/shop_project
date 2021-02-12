import React,{useState} from 'react';
import "./Products.css"
import Product from './../product/Product';



const Productslist = (props) => {
  
  return ( <>
      

        <div className="custom box box-lg shadow-sm mb-3">

            <div className="container container-mob">

              <div className='box-header'>
                <h2 className="head"> محصولات</h2>
              </div>
                <div className="box-body">
                  
                  <div className="row">

                    <div className="col-12 col-xx-11">

                      <ul className="products-list"> 

                        {props.products.map((item,index)=>{
                          return <li className="product-item">
                            <Product 
                            key={item.id}
                            item={item}
                            number={item.num}
                            productname={item.title}
                            productprice={item.price}
                            addproduct={props.addproduct}
                            removeproduct={props.removeproduct}
                            />  
                            </li>                                                 
                        })}                     
                    
                      </ul>
                    

                    

                  </div>

                </div>

              </div>

            </div>

        </div>

  </> );
}

 
export default Productslist;