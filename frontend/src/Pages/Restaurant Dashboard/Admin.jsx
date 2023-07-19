import React, { useState } from "react";
import Header from "../../Components/Restaurant Dashboard/Header";
import SideNavbar from "../../Components/Restaurant Dashboard/SideNavbar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ "--bs-gutter-x": "0rem", display: "flex" }}
      >
        <SideNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
