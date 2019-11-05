import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => (
  <div style={nav}>
    <Link style={link} to="/">
      Home
    </Link>
  </div>
);
const link = {
  textDecoration: "none",
  padding: 10
};
const nav = {
  display: "flex",
  borderBottom: "3px solid #4ac",
  marginBottom: 20,
  color: "black",
  ":hover": {
    color: "blue"
  }
};
export default Navigation;
