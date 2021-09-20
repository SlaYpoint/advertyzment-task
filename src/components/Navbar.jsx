import React from "react";

export const Navbar = ({ buttonHandler }) => {
  return (
    <>
      <nav className="nav">
        <span className="nav-brand-name">socioLife</span>
        <ul className="nav-link-section">
          <li className="nav-link">
            <button className="btn btn-primary" onClick={() => buttonHandler()}>
              Get Users
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
