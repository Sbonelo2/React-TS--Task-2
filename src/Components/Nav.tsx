import React from "react";
import SearchBar from "./SearchBar";

interface NavProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

export default function Nav({ search, setSearch, handleSearch }: NavProps) {
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

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <SearchBar
          text="Search by tag, title, or link..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
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
            fontWeight: "600",
          }}
        >
          Search
        </button>
        {search && (
          <button
            onClick={() => setSearch("")}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#f44336",
              color: "white",
              fontWeight: "600",
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
