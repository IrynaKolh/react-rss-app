import React from 'react';
import './mySelect.css';
import { SortType } from '../../../model/interfases';

type SelectProps = {
  options: Option[];
  defaultValue: string;
  value: string;
  onChange: (sort: SortType | string) => void;
};
type Option = {
  value: string;
  name: string;
};

const MySelect = ({ options, defaultValue, value, onChange }: SelectProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="select">
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
