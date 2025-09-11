import React from "react";
import Table from "./Table";
interface Props {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ text, value, onChange }: Props) {
  return (
    <div>
      <input
        type="text"
        name={text.toLowerCase()}
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
