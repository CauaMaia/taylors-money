import React from 'react';
import './style.css';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, options, value, onChange }: SelectProps) => {
  return (
    <div className="select-wrapper">
      <label className="select-label">{label}</label>
      <select className="select-field" value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
