import React from 'react'
import MainRec from './MainRec';
import NavBar from './NavBar'
import Footer from './Footer';

export default function Windows() {
  return (
    <div
      style={{
        // backgroundColor: "#0f7accff",
        border: "3px solid red",
        width: "100%",
        height: "100%",
        padding: "7%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "400%",
        }}
      >
        {/* <NavBar /> */}
        <MainRec />
     
      
        
      </div>
    </div>
  );
}
