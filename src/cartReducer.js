import { legacy_createStore as createStore } from "redux";

///Actions

export const addToCart = (item) => ({
  type: "addtocart",
  payload: item,
});
export const incrementCart = (item) => ({
  type: "increment",
  payload: item,
});
export const decrementCart = (item) => ({
  type: "decrement",
  payload: item,
});
export const removeFromCart = (item) => ({
  type: "removefromcart",
  payload: item,
});
export const openModal = () => ({
  type: "openmodal",
});
export const closeModal = () => ({
  type: "closemodal",
});
const initialState = { cart: [], isModalOpen: false };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addtocart":
      return {
        isModalOpen:false,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            totalprice: parseFloat(action.payload.price),
          },
        ],
      };
    case "removefromcart":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };

    case "increment":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (action.payload.name === item.name) {
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
              totalprice: newQuantity * parseFloat(item.price),
            };
          }
          return item;
        }),
      };
    case "decrement":
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (action.payload.name === item.name && item.quantity >= 1) {
              const newQuantity = item.quantity - 1;
              return {
                ...item,
                quantity: newQuantity,
                totalprice: newQuantity * parseInt(item.price),
              };
            }
            return item;
          })
          .filter(
            (item) => !(action.payload.name === item.name && item.quantity == 0)
          ),
      };
    case "openmodal":
      return {
        cart: state.cart,
        isModalOpen: true,
      };
    case "closemodal":
      return {
        cart: [],
        isModalOpen: false,
      };
    default:
      return state;
  }
};
const store = createStore(cartReducer);

export default store;
