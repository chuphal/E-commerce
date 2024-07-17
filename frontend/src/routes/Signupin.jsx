import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Signupin = () => {
  return (
    <div className="register-page">
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Signupin;
