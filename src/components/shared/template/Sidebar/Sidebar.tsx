import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { routePaths } from "@/routes/all.routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";

import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;

  const sidebarItems = sidebarItemsGenerator(routePaths, role as string);
  const locationPaths = location.pathname.split("/");
  const currentPath = locationPaths?.[locationPaths.length - 1];

  return (
    <div className="h-full hidden md:block">
      <div className=" border-r bg-muted/40 sticky top-0 overflow-y-scroll">
        <div className="flex h-screen flex-col  gap-2">
          <div className="flex py-5 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                title="Talent haven logo"
                className="w-28"
              />
            </Link>

            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Menu className="h-5 w-5" />
            </Button> */}
          </div>

          <div className="flex-1 mt-5">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sidebarItems
                ?.filter(
                  (route) =>
                    (route && route.label !== "") ||
                    (route && route.children && route.children.length > 0)
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
                        <span className="font-medium text-sm text-[15px]">
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
                            className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary cursor-pointer mb-2 ${
                              currentPath === (child && child.path)
                                ? "text-primary bg-primary/10"
                                : "hover:bg-primary/5"
                            }`}
                          >
                            <span className="text-lg">{child?.icon}</span>
                            <span className="font-medium text-sm text-[15px]">
                              {child?.label}
                            </span>
                          </p>
                        ))}
                  </div>
                ))}
            </nav>
          </div>

          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
