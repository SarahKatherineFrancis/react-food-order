import React from "react";
import MAIN from "../../assets/meals.jpg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={MAIN} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
