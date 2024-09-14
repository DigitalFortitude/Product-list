import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, openModal } from "../../cartReducer";
import OrderConfModal from "../OrderConfModal/OrderConfModal";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const modalView = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();
  const quantity = cart.reduce((s, cartItem) => {
    s = s + cartItem.quantity;
    return s;
  }, 0);

  const finalPrice = cart.reduce((s, cartItem) => {
    s += cartItem.totalprice;
    return s;
  }, 0);
  const handleModal = () => {
    dispatch(openModal());
  };
  return (
    <div className="cart">
      <h1>Your Cart({quantity})</h1>
      {cart.length === 0 ? (
        <div className="cart__empty">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart__exist">
          {cart?.map((cartItem) => {
            return (
              <article>
                <section className="cart__exist__list">
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>
                      <span className="number-saffron">
                        {" "}
                        {cartItem.quantity}x
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="each-price">@${cartItem.price}</span>
                      &nbsp;&nbsp;
                      <span className="total-price">
                        {`$${cartItem.totalprice.toFixed(2)}`}{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="cart__exist__list--remove"
                    onClick={() => dispatch(removeFromCart(cartItem))}
                  >
                    <img src="/assets/images/icon-remove-item.svg" alt="" />
                  </div>
                </section>
                <hr />
              </article>
            );
          })}

          <div className="cart__exist__total">
            <p className="order-total">Order Total</p>
            <p className="total">{`$${finalPrice.toFixed(2)}`}</p>
          </div>
          <div className="cart__exist__carbon--neutral">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <p className="carbon-neutral">
              This is a{" "}
              <span className="carbon-neutral--weighted">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button onClick={handleModal}> Confirm Order</button>
        </div>
      )}
      {modalView && <OrderConfModal cart={cart} modalView={modalView} />}
    </div>
  );
};

export default Cart;
