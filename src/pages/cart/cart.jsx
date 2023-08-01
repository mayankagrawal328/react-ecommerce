import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "./cart.css";


export const Cart = () => {
  
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
    if(window.sessionStorage.getItem("key")=="value"){
      return (
        <div className="cart">
          <Navbar />
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cart">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>

          {totalAmount > 0 ? (
            <div className="checkout">
              <p> Subtotal: Rs.{totalAmount} </p>
              <button onClick={() => navigate("/home")}> Continue Shopping </button>
              <button
                onClick={() => {
                  checkout();
                  alert("Order is placed!");
                }}
              >
                {" "}
                Checkout{" "}
              </button>
            </div>
          ) : (
            <h1> Your Shopping Cart is Empty</h1>
          )}
        </div>
      );
  }
  else{
    return(<h1>404 Page not Found!!</h1>);
  }
};
