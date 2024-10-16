import {
  Users2,
  Users,
  Package2,
  Home,
  LineChart,
  Settings,
  BookUser,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Link } from "react-router-dom";

const AppSidebarNav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/employees"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Employees</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Employees</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <BookUser className="h-5 w-5" />
                <span className="sr-only">Vacancies</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Vacancies</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
    // <nav
    //   className={cn("h-full transition", {
    //     "w-fit": isScreenMobileWidth,
    //     "absolute h-screen w-screen backdrop-blur":
    //       isScreenMobileWidth && isMobileMenuOpen,
    //     "w-64": !isScreenMobileWidth,
    //   })}
    // >
    //   <div
    //     className={cn("h-full bg-background", {
    //       "border-r w-3/6 min-w-64": isScreenMobileWidth && isMobileMenuOpen,
    //     })}
    //   >
    //     {isScreenMobileWidth && (
    //       <SidebarMobileMenu
    //         isMobileMenuOpen={isMobileMenuOpen}
    //         onMenuButtonClick={handleClick}
    //       />
    //     )}
    //     {!isScreenMobileWidth && <SidebarDesktopMenu />}
    //   </div>
    // </nav>
    // <div className="relative min-w-[140px] border-r px-3 pb-10 pt-24">
    //   <Nav
    //     isCollapsed={isCollapsed}
    //     links={[
    //       {
    //         title: "Dashboard",
    //         label: "",
    //         icon: LayoutDashboard,
    //         variant: "default",
    //         href: "/",
    //       },
    //       {
    //         title: "Employees",
    //         label: "",
    //         icon: Users2,
    //         variant: "ghost",
    //         href: "/employees",
    //       },
    //       {
    //         title: "Vacancies",
    //         label: "",
    //         icon: Send,
    //         variant: "ghost",
    //         href: "/vacancies",
    //       },
    //       {
    //         title: "Junk",
    //         label: "23",
    //         icon: ArchiveX,
    //         variant: "ghost",
    //       },
    //       {
    //         title: "Trash",
    //         label: "",
    //         icon: Trash2,
    //         variant: "ghost",
    //       },
    //       {
    //         title: "Archive",
    //         label: "",
    //         icon: Archive,
    //         variant: "ghost",
    //       },
    //     ]}
    //   />
    // </div>
  );
};

export default AppSidebarNav;
