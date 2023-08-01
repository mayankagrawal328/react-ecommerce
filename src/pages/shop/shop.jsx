import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

import { Navbar } from "../../components/navbar";
import {useLocation, useNavigate} from 'react-router-dom';


export const Shop = () => {
  
  if(window.sessionStorage.getItem("key")=="value"){
    return (
      <div className="shop">
        <Navbar />

        
        
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>
  
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  }
  else{
    return (
      
      <div className="shop">
        <h1>404 Page not Found!!</h1>
      </div>
    );
  }

};
