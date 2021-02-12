import React, { Component, useState } from "react";
import Upnav from "../../navigation/Upnav/Upnav";
import Navbar from "../../navigation/Navbar/Navbar";
import Productslist from "../products/Productslist";
import Shoppingcart from "../../side/shoppingcart/Shoppingcart";
import Footer from "../../Footer/Footer";

// const Productlistpage = () => {

// const [products,setproducts]=useState ([
//     {id:1,title:"product1" , type:"product1" , price :300000 ,num :0},
//     {id:2,title:"product2" , type:"product2" , price :50000 ,num :0},
//     {id:3,title:"product3" , type:"product3", price :230000 ,num :0},
//     {id:4,title:"product4" , type:"product4", price :220000 ,num :0},
//     {id:5,title:"product5" , type:"product5", price :9000 ,num :0},
//     {id:6,title:"product6" , type:"product6", price :7560 ,num :0},
//     {id:7,title:"product7" , type:"product7", price :7560 ,num :0},
//     {id:8,title:"product8" , type:"product8", price :7560 ,num :0},
//     {id:9,title:"product9" , type:"product9", price :7560 ,num :0},
//     {id:10,title:"product10" , type:"product10", price :7560 ,num :0},
//     {id:11,title:"product11" , type:"product11", price :7560 ,num :0},
//     {id:12,title:"product12" , type:"product12", price :7560 ,num :0},
//     {id:13,title:"product13" , type:"product13", price :7560 ,num :0},
//     {id :14,title:"product14" , type:"product14", price :7560 ,num :0},
//     {id:15,title:"product15" , type:"product15", price :55000 ,num :0}
//   ]);

//   const Add = (item) =>{
//     const products = [...products];
//     const index = products.indexOf(item)
//     products[index] = {...item}
//     products[index].num ++;
//     setproducts(products)
//   }

//     return ( <div>
//         <Shoppingcart />
//       <Upnav />
//       <Navbar />
//       <Productslist
//       products={products}
//       addproduct={Add}
//        />

//       <Footer />

//     </div> );
// }

// export default Productlistpage;

class Productlistpage extends Component {
  state = {
    products: [
      { id: 1, title: "product1", type: "product1", price: 300000, num: 0 },
      { id: 2, title: "product2", type: "product2", price: 50000, num: 0 },
      { id: 3, title: "product3", type: "product3", price: 230000, num: 0 },
      { id: 4, title: "product4", type: "product4", price: 220000, num: 0 },
      { id: 5, title: "product5", type: "product5", price: 9000, num: 0 },
      { id: 6, title: "product6", type: "product6", price: 7560, num: 0 },
      { id: 7, title: "product7", type: "product7", price: 7560, num: 0 },
      { id: 8, title: "product8", type: "product8", price: 7560, num: 0 },
      { id: 9, title: "product9", type: "product9", price: 7560, num: 0 },
      { id: 10, title: "product10", type: "product10", price: 7560, num: 0 },
      { id: 11, title: "product11", type: "product11", price: 7560, num: 0 },
      { id: 12, title: "product12", type: "product12", price: 7560, num: 0 },
      { id: 13, title: "product13", type: "product13", price: 7560, num: 0 },
      { id: 14, title: "product14", type: "product14", price: 7560, num: 0 },
      { id: 15, title: "product15", type: "product15", price: 55000, num: 0 },
    ],
    user_cart: [],
  };

  Add = (item) => {
    const { user_cart } = this.state;
    const products = [...this.state.products];
    const index = products.indexOf(item);
    products[index] = { ...item };
    products[index].num++;
    this.setState({ products });

    let LS = localStorage.getItem("user_cart");

    // if(LS){
    //   let vasete=[];
    //   let a = JSON.parse(localStorage.getItem('user_cart'))
    //   a.forEach(element => {
    //     vasete.push(element)
    //   });
    //   this.setState({user_cart:vasete})

    //   for(let i=0 ; i <= user_cart.length ; i++){
    //     if(user_cart[i].id === products[index].id){
    //     user_cart[i].num += 1;
    //     this.setState({user_cart})
    //   }
    //     else{
    //       user_cart.push(products[index])
    //       this.setState({user_cart})
    //   }
    // }

    // }
    // else{
    //   user_cart.push(products[index])
    //   this.setState({user_cart})
    //   localStorage.setItem('user_cart' , JSON.stringify(user_cart))

    // }
  };

  Remove = (item) => {
    const products = [...this.state.products];
    const index = products.indexOf(item);
    products[index] = { ...item };
    products[index].num--;
    this.setState({ products });
  };

  componentDidMount() {
    let LS = localStorage.getItem("user_cart");
    if (LS) {
      this.Setdata();
    }
  }

  Setdata = () => {
    const { user_cart } = this.state;
    let list = JSON.parse(localStorage.getItem("user_cart"));
    this.setState({ user_cart: list });
    console.log(user_cart);
  };

  render() {
    return (
      <div>
        <Shoppingcart />
        <Upnav />
        <Navbar />
        <Productslist
          products={this.state.products}
          addproduct={this.Add}
          removeproduct={this.Remove}
        />

        <Footer />
      </div>
    );
  }
}

export default Productlistpage;
