import React, { useEffect, useState } from "react";
import AddtoCart from "../AddtoCart/AddtoCart";
import "./Singledessert.scss";
const Singledessert = ({ item, index }) => {
  const [windowsize, setWindowsize] = useState("");
  const[clicked,setClicked]=useState(false)
  useEffect(() => {
    const handleresize = () => {
      if (window.innerWidth < 1000) {
        setWindowsize("mobile");
      } else setWindowsize("desktop");
    };
    handleresize();
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <div className="singledessert">
      <section className="singledessert__section">
        <div className={`singledessert__section__image ${clicked?"image-clicked":""}`}>
          {windowsize === "desktop" ? (
            <img src={item.image.desktop} alt="" />
          ) : (
            <img src={item.image.mobile} alt="" />
          )}
        </div>
        <AddtoCart index={index} singleItem={item} setClicked={setClicked} />
      </section>

      <p className="singledessert__category">{item.category}</p>
      <p className="singledessert__name">{item.name}</p>
      <p className="singledessert__price">${item.price}</p>
    </div>
  );
};

export default Singledessert;
