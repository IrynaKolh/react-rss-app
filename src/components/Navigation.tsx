import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink end to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/form" className="nav-link">
        Add Card
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </nav>
  );
}

export default Navigation;
