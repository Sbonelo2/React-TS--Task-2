import React from "react";

export default function Nav({ search, setSearch, handleSearch }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        padding: "1rem",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <a href="#HOME" style={{ color: "white" }}>
        HOME
      </a>
      <a href="#ABOUT" style={{ color: "white" }}>
        ABOUT
      </a>
      <a href="#PORTFOLIO" style={{ color: "white" }}>
        PORTFOLIO
      </a>
      <a href="#SERVICES" style={{ color: "white" }}>
        SERVICES
      </a>

      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
