import { useState } from "react";
import Input from "./Input";


interface NavProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

export default function Nav({ search, setSearch, handleSearch }: NavProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <nav className="Nav" style={{
      backgroundColor: "transparent",
      width: "100%",
      padding: "1.5rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {['HOME', 'ABOUT', 'PORTFOLIO', 'SERVICES'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            style={{ 
              color: isHovered === item ? "#ffffff" : "#1a202c",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={() => setIsHovered(item)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span style={{ position: "relative", zIndex: 1 }}>{item}</span>
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Input
          name="search"
          text="Search by tag, title, or link..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="btn"
          style={{
            padding: "0.875rem 2rem",
            cursor: "pointer",
            borderRadius: "12px",
            border: "2px solid #1a202c",
            backgroundColor: "#ffffff",
            color: "#1a202c",
            fontWeight: "700",
            fontSize: "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#1a202c";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#1a202c";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
          }}
        >
          <span>Search</span>
        </button>
        {search && (
          <button
            onClick={() => setSearch("")}
            className="btn btn-secondary"
            style={{
              padding: "0.875rem 2rem",
              cursor: "pointer",
              borderRadius: "12px",
              border: "2px solid #cbd5e0",
              backgroundColor: "#f7fafc",
              color: "#1a202c",
              fontWeight: "700",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1a202c";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "#1a202c";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#f7fafc";
              e.currentTarget.style.color = "#1a202c";
              e.currentTarget.style.borderColor = "#cbd5e0";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
            }}
          >
            <span>Clear</span>
          </button>
        )}
      </div>
    </nav>
  );
}
