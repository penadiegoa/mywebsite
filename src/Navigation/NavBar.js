import React from 'react';
import './NavBar.css';

const NavBar = props => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {props.children}
      </ul>
    </nav>
  )
}

export default NavBar;