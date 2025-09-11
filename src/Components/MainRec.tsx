import React from "react";
import Rec from "./Rec";
import NavBar from "./NavBar";
import Footer from "./Footer.tsx";
export default function MainRec() {
  return (
    <div
      style={{
        // border: "2px solid black",
        backgroundColor: "",
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        padding: "3%",
        // borderRadius: "12px",
        marginTop: "1%",
        marginRight: "30%"
      }}
    >
      <NavBar/>
      <Rec />
      <Footer/>
      {/* <Footer /> */}
      <div></div>
    </div>
  );
}
