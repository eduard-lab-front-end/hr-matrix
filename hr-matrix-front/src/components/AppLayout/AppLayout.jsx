import { Separator } from "@/components/ui/separator";
import AppHeader from "./AppHeader/AppHeader";
import AppSidebar from "./AppSidebar/AppSidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-row">
      <AppSidebar />
      <Separator orientation="vertical" />
      <div className="w-full h-screen flex flex-col">
        <header className="h-16 w-full">
          <AppHeader />
        </header>
        <Separator />
        <main className="w-full h-full p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
