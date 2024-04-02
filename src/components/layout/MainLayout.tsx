import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/template/Header";
const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="bg-black text-white py-20 h-screen">This is footer</div>
    </div>
  );
};

export default MainLayout;
