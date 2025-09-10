import React from "react";
import SearchBar from "./SearchBar";
import BtnSaveChanges from "./BtnSave";
import Btnedit from "./Btnedit";
import BtnDel from "./BtnDel";
export default function Squ() {
  return (
    <div
      style={{
        border: "2px solid green",
        // backgroundColor: "#2ca855ff",
        height: "200%",
        width: "50%",
        // borderRadius: "12px",
        padding: "3%",
        // borderRadius: "12px",
      }}
    >
      <div>
        <div className="Search">
          <SearchBar text="Search" /> <br />
        </div>
      </div>
    </div>
  );
}
