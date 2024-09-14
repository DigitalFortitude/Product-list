import React from "react";
import "./Page.scss";
import Dessert from "../components/Dessert/Dessert";
import Cart from "../components/Cart/Cart";

const Page = () => {

  return (
    <div className="page">
      <Dessert />
      <Cart/>
    </div>
  );
};

export default Page;
