import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
