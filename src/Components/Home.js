import React from "react";
import img1 from "../images/hh.png";
const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
         <img scr="static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Add-to-cart" />
        </div>
      <h1>Home Containers</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img scr={img1} alt="Mobile app" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price $1000</span>
        </div>

        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
