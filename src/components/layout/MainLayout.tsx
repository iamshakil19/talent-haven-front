import { Outlet } from "react-router-dom";
import Header from "../shared/template/Header";
import Footer from "../shared/template/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
