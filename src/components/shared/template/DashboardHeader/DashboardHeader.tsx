import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { routePaths } from "@/routes/all.routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;

  const sidebarItems = sidebarItemsGenerator(routePaths, role as string);
  const locationPaths = location.pathname.split("/");
  const currentPath = locationPaths?.[locationPaths.length - 1];

  return (
    <header className="flex sticky top-0 z-10 bg-background h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col overflow-y-scroll">
          <div className="mb-5">
            <Link to="/">
              <SheetClose asChild>
                <img
                  src="/logo.svg"
                  alt="logo"
                  title="Talent haven logo"
                  className="w-28"
                />
              </SheetClose>
            </Link>
          </div>

          <div className="flex-1">
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
                      <SheetClose asChild>
                        <p
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
                      </SheetClose>
                    )}

                    {route &&
                      route.children
                        ?.filter((child) => child && child.label !== "")
                        ?.map((child, childIndex) => (
                          <SheetClose asChild key={childIndex}>
                            <p
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
                          </SheetClose>
                        ))}
                  </div>
                ))}
            </nav>
          </div>

          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 cursor-pointer w-10 bg-muted hover:bg-primary-gray/30 transition-all duration-300 ease-in-out flex items-center justify-center ring-1 hover:ring-2 ring-primary ring-offset-4 hover:ring-offset-2">
            <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            <AvatarFallback className="font-semibold">SA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer !text-primary-red"
            onClick={() => dispatch(logout())}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default DashboardHeader;
