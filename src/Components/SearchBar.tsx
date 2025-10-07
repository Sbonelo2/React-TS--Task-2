import React from "react";

interface SearchBarProps {
  text: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ text, value = "", onChange, onKeyDown }: SearchBarProps) {
  return (
    <input
      className="SearchBar"
      type="text"
      name="search"
      placeholder={text}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      style={{ 
        marginLeft: "1rem", 
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        minWidth: "200px"
      }}
    />
  );
}
