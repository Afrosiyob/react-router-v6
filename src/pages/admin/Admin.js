import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to="/admin/page-one"> page one </Link>
      <Link to="/admin/page-two"> page two </Link>
      <Outlet />
    </div>
  );
};

export default Admin;
