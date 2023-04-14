import React from "react";
import { Link } from "react-router-dom";
import "./contact.css"

export const Contact = () => {
  return <div className="contact">
  
  <div className="contactTitle">
  <h1>Contact Us</h1>
  </div>
  <h4>Email: <Link>shani@gmail.com</Link></h4>
  <h4>Phone: +972 050 123 4567</h4> 
  
  </div>;
};
