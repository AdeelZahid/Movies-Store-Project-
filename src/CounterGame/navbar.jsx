import React from "react";

const Navbar = ({totalCounter}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Click on Available Item : <span className="badge badge-pill badge-secondary">{totalCounter}</span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
