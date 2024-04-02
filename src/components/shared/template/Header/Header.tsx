import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "@/utils/useScrollPosition";
import { TfiMenu } from "react-icons/tfi";
import headerItems from "@/constants/header.constants";
import { LiaUser } from "react-icons/lia";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  return (
    <div
      className={`${
        scrollPosition > 80
          ? "bg-transparent backdrop-blur-lg transition-colors duration-1000"
          : "bg-gradient-to-r from-[#F2F5FB] to-[#EEF3FA] transition-colors duration-1000"
      }`}
    >
      <header
        className={`flex justify-between h-20 items-center gap-4 px-4 md:px-6 max-w-[1700px] mx-auto ${
          scrollPosition > 80
            ? "bg-transparent backdrop-blur-lg transition-colors duration-1000"
            : "bg-gradient-to-r from-[#F2F5FB] to-[#EEF3FA] transition-colors duration-1000"
        }`}
      >
        <div className="hidden md:block">
          <Link to="/">
            <img src="/logo.svg" alt="logo" title="Talent haven logo" />
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
              <TfiMenu className="text-3xl" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mb-10">
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
            <nav className="grid gap-3 text-lg font-medium">
              {headerItems.map((item) => (
                <SheetClose asChild>
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex text-muted-foreground py-1.5 px-3 rounded-md ${
                      location.pathname === item.path
                        ? "font-semibold text-primary-foreground bg-primary/90"
                        : "hover:text-primary/80 hover:bg-primary/20"
                    }`}
                  >
                    <div className="flex gap-3">
                      <span className="text-xl mt-0.5">
                        {location.pathname === item.path
                          ? item.iconFilled
                          : item.iconOutline}
                      </span>
                      <span className="">{item.label}</span>
                    </div>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div>
          <Link to="/">
            <img
              src="/logo.svg"
              alt="logo"
              title="Talent haven logo"
              className="md:hidden"
            />
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-5">
          <div className="gap-10 hidden md:flex">
            {headerItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={` text-muted-foreground ${
                  location.pathname === item.path
                    ? "font-semibold text-primary"
                    : "hover:text-primary/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <Link to="/login" className="hidden md:block ml-14">
              <Button variant={"outline"}>Login / Register</Button>
            </Link>
            <Link to="/login" className="md:hidden text-4xl">
              <LiaUser />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
