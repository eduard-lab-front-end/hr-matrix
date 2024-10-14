import { SessionContext } from "@/contexts/SessionContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(SessionContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Button onClick={logout}>Logout</Button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
