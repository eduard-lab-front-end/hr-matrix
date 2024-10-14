import UserCard from "@/components/UserCard/UserCard";
import SidebarButtons from "../SidebarButtons/SidebarButtons";

const SidebarDesktopMenu = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
        Your dashboard
      </div>
      <SidebarButtons />
      <UserCard />
    </div>
  );
};

export default SidebarDesktopMenu;
