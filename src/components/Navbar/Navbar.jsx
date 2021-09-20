import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <span className="nav-brand-name">brand</span>
        <ul className="nav-link-section">
          <li className="nav-link">
            <button className="btn btn-primary">Get Users</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
