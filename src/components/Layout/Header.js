import React from "react";
import MAIN from "../../assets/meals.jpg";

import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={MAIN} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
