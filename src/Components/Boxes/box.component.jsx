import React, { Component } from "react";
import './box.css'
import { Link } from "react-router-dom";

class Box extends Component {
  render() {
    return (
      <div style={{ display:"flex",height: "100vh",
      width:"100wh",justifyContent: "center",
      alignItems: "center",}}>
        <div>
        <div style={{display:"flex"}}>
          <Link to="/numberPicker"><div className="box1"></div></Link>
          <Link to="/numberPicker"><div className="box2"></div></Link>
        </div>
        <div style={{display:"flex"}}>
        <Link to="/numberPicker"><div className="box3"></div></Link>
          <Link to="/numberPicker"><div className="box4"></div></Link>
        </div>
        <div style={{display:"flex" ,color:"white",paddingTop:'10vh'}}>
          <h1>Please select any color</h1>
        </div>
        </div>
      </div> 
    );
  }
}

export default Box;