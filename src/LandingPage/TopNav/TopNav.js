import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="left">
        <span>Write a review</span>
        <span>Events</span>
      </div>
      <div className="right">
        <span>Login</span>
        <button className="button">SignUp</button>
      </div>
    </div>
  );
};

export default TopNav;
