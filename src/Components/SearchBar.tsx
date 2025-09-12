import React from "react";

export default function SearchBar({ text }: { text: string }) {
  return (
    <input
      className="SearchBar"
      type="text"
      name="search"
      placeholder={text}
      style={{ marginLeft: "1rem", padding: "0.5rem" }}
    />
  );
}
