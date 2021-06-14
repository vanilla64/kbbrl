import React from 'react';
import logo from "../../images/logo.png";

function HeaderLogo(props) {
  return (
    <div className="header__logo">
      <p className="header__title">ТБ</p>
      <img className="header__img" src={logo} alt="Logo"/>
      <h1 className="header__title">Beresklet</h1>
    </div>
  )
}

export default HeaderLogo
