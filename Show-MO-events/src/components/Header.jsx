// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>ShowMOEvents</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
