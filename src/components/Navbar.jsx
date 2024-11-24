import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/landing" style={styles.link}>
        <button style={styles.button}>Home</button>
      </Link>
      <Link to="/know-your-skin-type" style={styles.link}>
        <button style={styles.button}>Know Your Skin Type</button>
      </Link>
      <button style={styles.button}>
      <Link to="/consult">Consult</Link>
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed", // Keep the navbar fixed at the top
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#6c757d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    zIndex: 1000, // Ensure it stays above other elements
  },
  button: {
    backgroundColor: "#f4a261",
    color: "white",
    padding: "10px 15px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  link: {
    textDecoration: "none",
  },
};

export default Navbar;
