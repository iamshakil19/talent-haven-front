import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Dispatch } from "@reduxjs/toolkit";
import { LifeBuoy, LogOut, Menu, Settings, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

const DashboardHeader = () => {
  const dispatch: Dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;

  const sidebarItems = sidebarItemsGenerator(routePaths, role as string);
  const locationPaths = location.pathname.split("/");
  const currentPath = locationPaths?.[locationPaths.length - 1];

  return (
    <header className="flex sticky top-0 z-10 bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB] h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      {/* Dashboard sidebar for mobile device */}
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

      {/* Dashboard Header */}
      <div className="flex items-center justify-between gap-5 w-full">
        <Button variant="ghost" size="circle" className="h-10 w-10 ml-5">
          <IoSearch className="text-primary-gray" size={25} />
        </Button>

        <div className="flex items-center gap-5">
          {/* Notification */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="circle" className="h-10 w-10">
                <span className="bg-primary-red w-2 h-2 rounded-full absolute top-2 right-2.5"></span>
                <MdNotificationsNone className="text-primary-gray" size={27} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full max-w-sm mt-1 p-0 mr-5">
              <DropdownMenuLabel>
                <div className="flex items-center gap-3 justify-between p-1.5 tracking-wide">
                  Notifications
                  <IoMailOpenOutline size={20} className="font-medium mb-1" />
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="overflow-y-scroll max-h-80">
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium mb-1 tracking-wide">
                      Jean Bowman invited you to new project into the...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium whitespace-nowrap mb-1 tracking-wide">
                      Jean Bowman invited you to new project...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium whitespace-nowrap mb-1 tracking-wide">
                      Jean Bowman invited you to new project...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium whitespace-nowrap mb-1 tracking-wide">
                      Jean Bowman invited you to new project...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium whitespace-nowrap mb-1 tracking-wide">
                      Jean Bowman invited you to new project...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-3 hover:bg-muted cursor-pointer flex items-start gap-3 border-b ">
                  <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                    <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <AvatarFallback className="font-semibold">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium whitespace-nowrap mb-1 tracking-wide">
                      Jean Bowman invited you to new project...
                    </p>
                    <p className="text-xs text-primary-gray tracking-wide">
                      4 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem className="py-3 mb-1 cursor-pointer">
                <p className="text-center w-full text-primary-gray font-semibold text-sm">
                  View All Activity
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 cursor-pointer w-10 bg-primary-gray/40 hover:bg-primary-gray/30 transition-all duration-300 ease-in-out flex items-center justify-center ring-1 hover:ring-2 ring-primary ring-offset-4 hover:ring-offset-2">
                <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                <AvatarFallback className="font-semibold">SA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 mr-5 mt-1">
              <DropdownMenuLabel>
                <div className="flex items-center gap-3">
                  <div>
                    <Avatar className="h-10 w-10 bg-primary-gray/40 transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg">
                      <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      <AvatarFallback className="font-semibold">
                        SA
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-medium text-sm tracking-wide">
                      Shakil Ahmed
                    </p>
                    <p className="text-xs text-primary-gray font-medium tracking-wider">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-2 mb-1 hover:bg-secondary-purple hover:text-primary cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="py-2 mb-1 hover:bg-secondary-purple hover:text-primary cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="py-2 mb-1 hover:bg-secondary-purple hover:text-primary cursor-pointer">
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="py-2 mb-1 cursor-pointer !text-primary-red hover:bg-secondary-red"
                onClick={() => dispatch(logout())}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
