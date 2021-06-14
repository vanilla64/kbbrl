import React from 'react'
import './Header.sass'
import Navigation from "../Navigation/Navigation";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

function Header(props) {
  return (
    <header className='header'>
      <HeaderLogo />
      <Navigation />
    </header>
  )
}

export default Header
