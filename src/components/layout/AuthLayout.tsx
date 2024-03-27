import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex gap-10">
      <div>This is dashboard sidebar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
