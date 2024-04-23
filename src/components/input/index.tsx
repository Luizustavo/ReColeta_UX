import React from "react";
import './style.css';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        className="custom-input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
