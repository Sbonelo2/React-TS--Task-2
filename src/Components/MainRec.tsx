import React, { useState } from "react";
import Nav from "./Nav";
import Table from "./Table";
import Footer from "./Footer";

export default function MainRec() {
  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(""); // Store search trigger

  const handleSearch = () => {
    setTriggerSearch(search); // Only filter when button clicked
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <Table search={triggerSearch} />
      <Footer />
    </div>
  );
}
