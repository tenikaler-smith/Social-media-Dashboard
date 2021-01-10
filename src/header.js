import React from "react";
import './header.css'


function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="hearder-grid">
          <div>
            <h1> Social Media Dashboard </h1>
            <p className="header-total"> Total Follower: 23, 004 </p>
          </div>
          <div className="dark-mode">
            <p className="dark-mode-title"> Dark Mode </p>
            <input type="checkbox" className="checkbox" id="checkbox0" />
            <label className="switch" htmlFor="checkbox"></label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
