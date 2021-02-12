import React from 'react';
import Category_component from './category_compnent'
import './Category.css'
import cat_1 from './../../../images/categories_img_01.jpg'
import cat_2 from './../../../images/categories_img_02.jpg'
import cat_3 from './../../../images/categories_img_03.jpg'


const Category = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 "><Category_component img={cat_1} > سیفی جات  </Category_component></div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 "><Category_component img={cat_2} > سبزیجات  </Category_component></div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"><Category_component img={cat_3} >  میوه جات </Category_component></div>

    </div>
    </div>
    
   );
}
 
export default Category;