import React from "react";

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#content">Survey Content</a></li>
        <li><a href="#taxonomy">Taxonomy</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
