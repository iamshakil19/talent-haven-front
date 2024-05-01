import { Outlet } from "react-router-dom";
import Sidebar from "../shared/template/Sidebar/Sidebar";
import DashboardHeader from "../shared/template/DashboardHeader";
import { useState } from "react";

const AuthLayout = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`grid min-h-screen w-full transition-all duration-900 ${
          isCollapsed
            ? "md:grid-cols-[75px_1fr] grid-cols-[1fr]"
            : "md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] grid-cols-[1fr]"
        }`}
      >
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} />
        <div className="flex flex-col w-full">
          {/* Dashboard Header */}
          <DashboardHeader
            isCollapsed={isCollapsed}
            setCollapsed={setCollapsed}
          />

          {/* Dashboard Content */}
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-5 lg:p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
