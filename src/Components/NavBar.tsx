import React from 'react'
import Search from './SearchBar'
export default function Nav() {
  return (
    <div
      className="Nav"
      style={{
        // border: "2px solid purple",
        backgroundColor: "black",
        height: "1%",
        width: "100%",
        borderRadius: "3px",
        padding: "2rem",
        // borderRadius: "12px",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
        // transition: "all 0.3s ease",
        // boxShadow: "0 0 10px #290c44ff",
        //  borderBottom: "2px solid blue"
        // marginBottom: "1%",
        //  marginLeft: "10%",
        // marginBottom: "2%",
        marginTop: "1%",
      }}
    >
      
        <a href="#HOME">HOME</a>
        <a href="#ABOUT US">ABOUT US</a>
        <a href="#PORTFOLIO">PORTFOLIO</a>
        <a href="#SERVICES">SERVICES</a>
      
      <div className="Search">
        <Search text="Search" /> <br />
      </div>
    </div>
  );
}
