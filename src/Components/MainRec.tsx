import React from "react";
import Nav from "./Nav";
import Table from "./Table";
import Footer from "./Footer";

export default function MainRec() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav />
      <Table />
      <Footer />
    </div>
  );
}
