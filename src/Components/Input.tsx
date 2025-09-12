import React from "react";

interface Props {
  name: string;
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, text, value, onChange }: Props) {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      />
    </div>
  );
}
