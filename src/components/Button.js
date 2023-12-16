import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Button.css"

const Button = ({ name, to }) => {
  return (
    <div className='button-container'>
      <Link to={to} className='solid-button'>
        {name}
      </Link>
    </div>
  );
};

export default Button
