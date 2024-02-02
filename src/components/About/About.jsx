import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome to About page</h3>
      <Link style={{ marginLeft: "30px" }} to="setting">
        Setting
      </Link>
      <Link style={{ marginLeft: "30px" }} to="dashboard">
        Dashboard
      </Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default About;
