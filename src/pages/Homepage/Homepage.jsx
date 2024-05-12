import React from 'react';
import logo from '../../logo/logo.png';
import './homepage.css';

function Homepage() {
  return (
    <div className='homepage-container'>
      <div className="content-container">
        <img className='logo-img' src={logo} alt="Logo" />
        <h1 className='homepage-title'>Where It’s @</h1>
        <h2 className='homepage-slogan'>Ticketing made easy</h2>
      </div>
    </div>
  );
}

export default Homepage;

