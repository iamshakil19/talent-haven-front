import { Outlet } from "react-router-dom";
import Sidebar from "../shared/template/Sidebar/Sidebar";
import DashboardHeader from "../shared/template/DashboardHeader";

const AuthLayout = () => {
  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-col">
          {/* Dashboard Header */}
          <DashboardHeader />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-5 lg:p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
