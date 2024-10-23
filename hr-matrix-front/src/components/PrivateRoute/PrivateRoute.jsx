import { SessionContext } from "@/contexts/SessionContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../ui/spinner";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(SessionContext);

  if (isLoading) {
    return <Spinner />
  }
  if (!isAuthenticated && !isLoading) {
    console.log("Redirecting");
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
