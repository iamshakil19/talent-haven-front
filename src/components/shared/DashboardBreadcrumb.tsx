
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const DashboardBreadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <Breadcrumb className="flex ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
        </BreadcrumbItem>

        {paths?.map((item, index) => (
          <span key={index} className="flex items-center gap-2.5">
            <BreadcrumbSeparator />
            <BreadcrumbItem className="capitalize">
              {index === paths?.length - 1 ? (
                <span>{item}</span>
              ) : (
                <Link to={`/${item}`} className="hover:text-primary">
                  {" "}
                  {item}{" "}
                </Link>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
