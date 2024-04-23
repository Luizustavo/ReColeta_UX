import React from "react";
import './style.css'
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <Link to={to} className="custom-button">
      {text}
    </Link>
  );
}
  
  export default Button;