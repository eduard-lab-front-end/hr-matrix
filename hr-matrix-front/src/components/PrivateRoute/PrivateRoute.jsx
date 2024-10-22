import { SessionContext } from "@/contexts/SessionContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(SessionContext);
  console.log(isAuthenticated, isLoading);
  if (isLoading) {
    console.log("loading...");
    return <h1>Loading...</h1>;
  }
  if (!isAuthenticated && !isLoading) {
    console.log("Redirecting");
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
