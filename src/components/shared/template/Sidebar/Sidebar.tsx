import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { routePaths } from "@/routes/all.routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoMdSettings } from "react-icons/io";

const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;
  const sidebarItems = sidebarItemsGenerator(routePaths, role as string);
  const locationPaths = location.pathname.split("/");
  const currentPath = locationPaths?.[locationPaths?.length - 1];

  return (
    <div className={`h-full relative hidden md:block`}>
      <div className=" bg-muted/60 sticky top-0 overflow-y-scroll">
        <div className="flex h-screen flex-col gap-2">
          <div className="flex py-5 items-center px-4 lg:h-[60px] lg:px-6">
            {!isCollapsed && (
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="logo"
                  title="Talent haven logo"
                  className="w-28"
                />
              </Link>
            )}
          </div>

          {isCollapsed ? (
            <div className="flex-1 mt-5 overflow-x-hidden">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarItems
                  ?.filter(
                    (route) =>
                      (route && route.label !== "") ||
                      (route && route.children && route.children?.length > 0)
                  )
                  ?.map((route, index) => (
                    <div key={index} className="">
                      {route && route.label !== "" && (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <p
                              key={index}
                              onClick={() => navigate(`${route?.path}`)}
                              className={`flex items-center justify-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary cursor-pointer mb-2 ${
                                currentPath === route.path
                                  ? "text-primary bg-primary/10"
                                  : "hover:bg-primary/5"
                              }`}
                            >
                              <span className="text-lg">{route?.icon}</span>
                            </p>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            {route?.label}
                          </TooltipContent>
                        </Tooltip>
                      )}

                      {route &&
                        route.children
                          ?.filter((child) => child && child.label !== "")
                          ?.map((child, childIndex) => (
                            <Tooltip key={childIndex}>
                              <TooltipTrigger asChild>
                                <p
                                  onClick={() => navigate(`${child?.path}`)}
                                  className={`flex items-center justify-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary cursor-pointer mb-2 ${
                                    currentPath === (child && child.path)
                                      ? "text-primary bg-primary/10"
                                      : "hover:bg-primary/5"
                                  }`}
                                >
                                  {/* <span className="text-lg">{child?.icon}</span> */}

                                  <span className="text-lg">{child?.icon}</span>
                                </p>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                {child?.label}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                    </div>
                  ))}
              </nav>
            </div>
          ) : (
            <div
              className={`flex-1 mt-5 overflow-x-hidden transition-opacity duration-500 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarItems
                  ?.filter(
                    (route) =>
                      (route && route.label !== "") ||
                      (route && route.children && route.children?.length > 0)
                  )
                  ?.map((route, index) => (
                    <div key={index} className="">
                      {route && route.label !== "" && (
                        <p
                          key={index}
                          onClick={() => navigate(`${route?.path}`)}
                          className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary cursor-pointer mb-2 ${
                            currentPath === route.path
                              ? "text-primary bg-primary/10"
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <span className="text-lg">{route?.icon}</span>
                          <span className="font-medium text-sm text-[15px] whitespace-nowrap overflow-hidden">
                            {route?.label}
                          </span>
                        </p>
                      )}

                      {route &&
                        route.children
                          ?.filter((child) => child && child.label !== "")
                          ?.map((child, childIndex) => (
                            <p
                              key={childIndex}
                              onClick={() => navigate(`${child?.path}`)}
                              className={`flex items-center gap-3 flex-nowrap rounded-lg px-3 py-3 transition-all hover:text-primary cursor-pointer mb-2 ${
                                currentPath === (child && child.path)
                                  ? "text-primary bg-primary/10"
                                  : "hover:bg-primary/5"
                              }`}
                            >
                              <span className="text-lg">{child?.icon}</span>
                              <span className="font-medium text-sm text-[15px] whitespace-nowrap overflow-hidden">
                                {child?.label}
                              </span>
                            </p>
                          ))}
                    </div>
                  ))}
              </nav>
            </div>
          )}

          {isCollapsed ? (
            <div className="mt-auto mb-4 flex items-center justify-center">
              <Button className="w-fit text-2xl" variant={"ghost"}>
                <IoMdSettings />
              </Button>
            </div>
          ) : (
            <div className="mt-auto p-4">
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle className="whitespace-nowrap overflow-hidden text-xl lg:text-2xl">
                    Upgrade to Pro
                  </CardTitle>
                  <CardDescription className="max-h-16 overflow-hidden">
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
