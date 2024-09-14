import React, { memo, useEffect, useState } from "react";
import "./AddtoCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementCart, decrementCart } from "../../cartReducer";
const AddtoCart = ({ singleItem, setClicked }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const itemInCart = cart.find((item) => item.name === singleItem.name);
  if (!itemInCart) {
    setClicked(false);
  }
  const addtoCart = () => {
    dispatch(addToCart(singleItem));
    setClicked(true);
  };
  const handleIncrement = () => {
    dispatch(incrementCart(singleItem));
    setClicked(true);
  };
  const handleDecrement = () => {
    dispatch(decrementCart(singleItem));
  };
  return (
    <div className="addtocart">
      {!itemInCart ? (
        <button onClick={addtoCart} className="addtocart__button white">
          <img
            src="/assets/images/icon-add-to-cart.svg"
            className="addtocart__button--cart"
          />
          <p className="cartp">Add to Cart</p>
        </button>
      ) : (
        <button className="addtocart__button saffron">
          <section className="saffron--negative" onClick={handleDecrement}>
            <svg
           
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white" // Initial color
              className="icon"
            >
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </section>
          <p className="saffron__number">{itemInCart.quantity}</p>
          <section className="saffron--negative" onClick={handleIncrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="white"
              className="icon"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </section>
        </button>
      )}
    </div>
  );
};

export default AddtoCart;
