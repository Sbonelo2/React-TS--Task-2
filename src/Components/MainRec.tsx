import React from 'react'
import Rec from './Rec';
import NavBar from './NavBar';
import Footer from './Footer';
export default function MainRec() {
  return (
    <div
      style={{
        border: "2px solid black",
        // backgroundColor: "#2ca855ff",
        height: "100%",
        width: "80%",
        // borderRadius: "12px",
        padding: "3%",
              // borderRadius: "12px",
        // marginTop: "3%"
      }}
      >
          <NavBar />
          <Rec />
          <Footer />
          <div>
              
          </div>
    </div>
  );
}
