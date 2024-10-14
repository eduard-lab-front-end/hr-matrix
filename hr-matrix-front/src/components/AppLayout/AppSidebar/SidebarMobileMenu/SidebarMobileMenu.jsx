import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon } from "lucide-react";
import SidebarButtons from "../SidebarButtons/SidebarButtons";
import UserCard from "@/components/UserCard/UserCard";

const SidebarMobileMenu = ({ isMobileMenuOpen, onMenuButtonClick }) => {
  return (
    <div
      className="flex flex-col gap-4 p-4"
    >

      {isMobileMenuOpen && (
        <>
          <Button onClick={() => onMenuButtonClick(false)}>
            <ChevronLeftIcon /> Close
          </Button>
          <Separator />
          <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
            Your dashboard
          </div>
          <SidebarButtons /> 
          <UserCard />

        </>
      )}
      {!isMobileMenuOpen && (
        <Button onClick={onMenuButtonClick} variant='outline'>
          <ChevronLeftIcon className="h-4 w-4"/>
        </Button>
      )}
    </div>
  );
};

export default SidebarMobileMenu;
