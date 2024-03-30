import React from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16 bg-violet-600 text-white flex justify-center items-center">
        This is navbar
      </div>
      <div>
        <Outlet />
      </div>
      <div className="bg-black text-white py-20">This is footer</div>
    </div>
  );
};

export default MainLayout;
