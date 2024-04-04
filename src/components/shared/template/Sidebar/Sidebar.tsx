import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { routePaths } from "@/routes/all.routes";
import { ROLE } from "@/types";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { verifyToken } from "@/utils/verifyToken";
import {
  Home,
  LineChart,
  Menu,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case ROLE.CANDIDATE:
      sidebarItems = sidebarItemsGenerator(routePaths, ROLE.CANDIDATE);
      break;
    // case userRole.FACULTY:
    //   sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
    //   break;
    // case userRole.STUDENT:
    //   sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
    //   break;

    default:
      break;
  }

  console.log(sidebarItems, "sidebarItems");
  

  return (
    <div className="h-full">
      <div className="hidden border-r bg-muted/40 md:block sticky top-0 overflow-y-scroll">
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

            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
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
