import React from "react";
import "./Dessert.scss";
import cartlist from "../../data";
import Singledessert from "../Singledessert/Singledessert";
const Dessert = () => {
  return (
    <div className="dessert">
      <h1>Desserts</h1>
      <section className="dessert-list">
        {cartlist.map((item,index) => {
          return <Singledessert item={item} index={index}/>;
        })}
      </section>
    </div>
  );
};

export default Dessert;
