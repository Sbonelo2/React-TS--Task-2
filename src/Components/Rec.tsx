import React from "react";
import Square from "./Square";
import Squ from "./Squ";

export default function Rec() {
  return (
    <div
      style={{
        // border: "2px solid brown",
        // backgroundColor: "#2ca855ff",
        height: "60%",
        width: "50%",
        // borderRadius: "12px",
        padding: "3%",
        // borderRadius: "12px",
        // border: "2px solid black",
        marginTop: "10%",
        marginLeft: "25%"
      }}
    >
      
      {/* <div className="Topic" style={{
        marginLeft: "40%",
        fontSize: "150%"
      }}>
        <h1>LINK VAULT</h1>
      </div> */}
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
