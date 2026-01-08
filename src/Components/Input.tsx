import React from "react";

interface Props {
  name: string;
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, text, value, onChange }: Props) {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>
        {text}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}
