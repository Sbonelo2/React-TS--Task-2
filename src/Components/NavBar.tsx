import React from 'react'

export default function Nav() {
  return (
    <div className='Nav'
      style={{
        // border: "2px solid purple",
        backgroundColor: "black",
        height: "5%",
        width: "100%",
        // borderRadius: "12px",
        padding: "2%",
        borderRadius: "12px",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
        transition: "all 0.3s ease",
        // boxShadow: "0 0 10px #290c44ff",
        //  borderBottom: "2px solid blue"
        marginBottom: "1%",
       marginLeft: "10%"
        
        

       
        

         
        
        
        
      }}
    >
         <a href="#HOME">HOME</a>
          <a href="#ABOUT US">ABOUT US</a>
          <a href="#PORTFOLIO">PORTFOLIO</a>
          <a href="#SERVICES">SERVICES</a>
    </div>
  );
}
