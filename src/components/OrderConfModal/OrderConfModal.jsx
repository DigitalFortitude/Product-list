import React from "react";
import "./OrderConfModal.scss";
import { closeModal } from "../../cartReducer";
import { useDispatch } from "react-redux";
const OrderConfModal = ({ cart }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
  };
  const total=cart.reduce((acc,each)=>acc+=each.totalprice,0)
  return (
    <div className="modal">
      <div className="modal__tick">
        <img src="/assets/images/icon-order-confirmed.svg" alt="" />
      </div>
      <div className="modal__statement">
        <h1 className="order--confirm">Order Confirmed</h1>
        <p className="enjoy--food">We hope you enjoy your food</p>
      </div>
      <div className="modal__list">
        {cart.map((cartItem) => (
          <article className="modal__list__article">
            <section className="modal__list__article--section">
              <div className="thumbnail-image">
                <img src={cartItem.image.thumbnail} alt="" />
              </div>
              <div className="food-des">
                <p className="food">{cartItem.name}</p>
                <p className="quantity-price">
                  <span className="quantity-price--number">{cartItem.quantity}x</span>
                  &nbsp;&nbsp;&nbsp;
                  <span className="quantity-price--eachprice">@${cartItem.price}</span>
                </p>
              </div>
              <div>
                <p className="tot-price">{`$${cartItem.totalprice.toFixed(2)}`}</p>
              </div>
            </section>
            <hr />
          </article>
        ))}

        <div className="modal__list__totalorder">
          <p className="statement--order">Order Total</p>
          <p className="total--price">{`$${total.toFixed(2)}`}</p>
        </div>
      </div>

      <button onClick={handleClick} className="modal__start">
        Start New Order
      </button>
    </div>
  );
};

export default OrderConfModal;
