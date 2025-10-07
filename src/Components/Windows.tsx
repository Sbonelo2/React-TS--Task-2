import React, { useState } from "react";
import Rec from "./Rec";
// import NavBar from "./NavBar";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Table from "./Table.tsx";

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
    <div
      style={{
        // border: "2px solid black",
        backgroundColor: "",
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        // padding: "3%",
        // borderRadius: "12px",
        marginTop: "1%",
        marginRight: "30%",
      }}
    >
      {/* <NavBar /> */}
      <Nav search={search} setSearch={handleSearchChange} handleSearch={handleSearch} />
      <Table search={triggerSearch} />
      <Rec />
      <Footer />
      {/* <Footer /> */}
      <div></div>
    </div>
  );
}
