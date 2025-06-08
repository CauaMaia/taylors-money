import React from 'react';
import './style.css';

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ label, value, onChange, placeholder }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="money-input" className="input-label">
        {label}
      </label>
      <input
        id="money-input"
        className="input-field"
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
