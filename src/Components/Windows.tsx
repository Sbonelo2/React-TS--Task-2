import { useState } from "react";
import Nav from "./Nav.tsx";
import AdvancedTable from "./AdvancedTable.tsx";
import Footer from "./Footer.tsx";

export default function MainRec() {
  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState("");

  const handleSearch = () => {
    setTriggerSearch(search);
  };

  // Update search in real-time as user types
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setTriggerSearch(value); // Real-time filtering
  };

  return (
    <div className="main-container">
      <Nav search={search} setSearch={handleSearchChange} handleSearch={handleSearch} />
      <div className="content-container">
        <AdvancedTable search={triggerSearch} />
      </div>
      <Footer />
    </div>
  );
}
