import React from "react";
import "../styles/Navbar.css";

const styles = {
  navbarStyle: {
    background: "lightBlue",
    justifyContent: "center",
    padding: "5px",
    marginBottom: "15px",
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <h1>Employee Directory</h1>
    </nav>
  );
}

export default Navbar;
