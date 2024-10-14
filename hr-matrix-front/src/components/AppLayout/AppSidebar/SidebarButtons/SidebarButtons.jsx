import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SidebarButtons = () => {
  return (
    <>
      <Button variant="ghost">
        <Link to='/'>Dashboard</Link>
      </Button>
      <Button variant="ghost">
      <Link to='/users'>Users</Link> 
      </Button>
      <Button variant="ghost">Your onboarding</Button>
    </>
  );
};

export default SidebarButtons;
