import React from "react";

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
        <input
          type="text"
          placeholder="Search by tag, title, or link..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          style={{ 
            padding: "0.5rem", 
            borderRadius: "4px", 
            border: "1px solid #ccc",
            minWidth: "250px"
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
