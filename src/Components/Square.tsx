import React from "react";
import Input from "./Input";
import BtnAdd from "./BtnAdd";
import BtnDel from "./BtnDel";
import Btnedit from "./Btnedit";
import BtnSaveChanges from "./BtnSave";
export default function Square() {
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
        // marginTop: "3%"
      }}
    >
      <div>
        <div className="input">
          <Input text="Tag" /> <br />
          <Input text="Title" /> <br />
          <Input text="Link" /> <br />
          <Input text="Description" /> <br />
        </div>

        <div
          className="ThreeButtons"
          style={{
            display: "flex",
            height: "50%",
            width: "100%",
          }}
        >
          <BtnAdd />
          <Btnedit />
          <BtnDel />
          <BtnSaveChanges />
        </div>
      </div>
    </div>
  );
}
