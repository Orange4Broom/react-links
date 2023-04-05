// src/components/Navigation.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleSection2Click = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a onClick={handleSection2Click}>Section 2</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
