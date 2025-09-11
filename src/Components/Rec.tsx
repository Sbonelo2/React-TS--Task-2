import React from "react";
import Square from "./Square";
import Squ from "./Squ";

export default function Rec() {
  return (
    <div
      style={{
        // border: "2px solid brown",
        // backgroundColor: "#2ca855ff",
        height: "80%",
        width: "100%",
        // borderRadius: "12px",
        padding: "3%",
        // borderRadius: "12px",
        // border: "2px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50%",
          width: "100%",
        }}
      >
        <Square />
        <Squ />
      </div>
    </div>
  );
}
