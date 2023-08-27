import React from "react";
import MAIN from "../../assets/meals.jpg";

import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={MAIN} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
