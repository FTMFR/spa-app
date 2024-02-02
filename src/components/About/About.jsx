import React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
      <Routes>
        <Route
          path="setting"
          element={<p style={{ textAlign: "center" }}>Setting</p>}
        />
        <Route
          path="dashboard"
          element={<p style={{ textAlign: "center" }}>Dashboard</p>}
        />
      </Routes>
    </div>
  );
};

export default About;
