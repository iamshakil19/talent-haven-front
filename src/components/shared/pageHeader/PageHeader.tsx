import Container from "../Container";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

import PageHeaderForJob from "./PageHeaderForJob";

export enum IPageHeaderType {
  DEFAULT = "default",
  CANDIDATE = "candidate",
  EMPLOYER = "employer",
  JOB = "job",
}

const PageHeader = ({
  type = IPageHeaderType.DEFAULT,
  data,
}: {
  type: IPageHeaderType;
  data?: any;
}) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  // For Breadcrumbs
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  // For Job header

  let content;

  switch (type) {
    case "default":
      content = (
        <div className="text-center">
          <p className="text-2xl mb-3 tracking-wide font-semibold ">Jobs</p>
          <Breadcrumb className="flex justify-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="hover:text-primary">
                  Home
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
        </div>
      );
      break;
    case "candidate":
      content = <div>This is candidate</div>;
      break;
    case "employer":
      content = <div>This is employee</div>;
      break;
    case "job":
      content = <PageHeaderForJob data={data} user={user} />;
      break;
  }
  return (
    <div>
      <div className="p-10 bg-gradient-to-tl from-[#f3f6ff8c] to-[#e4eafe] ">
        <Container>{content}</Container>
      </div>
    </div>
  );
};

export default PageHeader;
