import React from "react";
import './header.css'


function Header({children}) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="hearder-grid">
          <div>
            <h1> Social Media Dashboard </h1>
            <p className="header-total"> Total Follower: 23, 004 </p>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
