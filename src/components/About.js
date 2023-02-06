import { height } from "@mui/system";
import React from "react";
import "./About.css"

export const About = () => {
  return (
    
      <div className="container">
        <div className="left-text">
        <h2 className="heading">  My Portfolio</h2> 
        <p className="subheading"> A good photographer only focuses on objects :p</p>
        </div>
        <div className="gallery">
        <div className="box row-2" style={{backgroundImage:'url(./images/img1.png'}}>box-1</div>
        <div className="box" style={{backgroundImage:'url(./images/sam1.jpg)'}}>box-2</div>
        <div className="box" style={{backgroundImage:'url(./images/sam2.jpg)'}}>"box-3"</div>
        <div className="box row-2" style={{backgroundImage:'url(./images/img1.png)'}}>"box-4"</div>
        <div className="box" style={{backgroundImage:'url(./images/sam1.jpg)'}}>"box-5"</div>
        <div className="box" style={{backgroundImage:'url(./images/img1.png)'}}>"box-6"</div>
        <div className="box" style={{backgroundImage:'url(./images/sam2.jpg)'}}>"box-7"</div>
       
      </div>
      </div>
  );
};
