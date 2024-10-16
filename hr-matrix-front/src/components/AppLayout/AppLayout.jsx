import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";

import AppHeader from "./AppHeader/AppHeader";
import AppSidebarNav from "./AppSidebar/AppSidebarNav";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignupPage";
import DashboardPage from "../../pages/DashboardPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EmployeesPage from "@/pages/EmployeesPage";

const AppLayout = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <AppSidebarNav />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <AppHeader />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/employees"
                element={
                  <PrivateRoute>
                    <EmployeesPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
