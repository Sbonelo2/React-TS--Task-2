import React from 'react'

export default function nav() {
  return (
    <div
      style={{
        // border: "2px solid purple",
        // backgroundColor: "#2ca855ff",
        height: "1%",
        width: "100%",
        // borderRadius: "12px",
        padding: "3%",
        // borderRadius: "12px",
        
      }}
    >
      <ul>
        <li>
          <a href="#HOME">HOME</a>
        </li>
        <li>
          <a href="#ABOUT US">ABOUT US</a>
        </li>
        <li>
          <a href="#PORTFOLIO">PORTFOLIO</a>
        </li>
        <li>
          <a href="#SERVICES">SERVICES</a>
          {/* <a href="#CONTACT US">CONTACT US</a> */}
        </li>
      </ul>
    </div>
  );
}
