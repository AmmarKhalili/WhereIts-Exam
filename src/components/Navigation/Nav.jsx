import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{backgroundColor:"#231F42" }}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link to="/CartPage">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/tickets">
            Tickets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


