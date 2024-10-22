import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";

import AppHeader from "./AppHeader/AppHeader";
import AppSidebarNav from "./AppSidebar/AppSidebarNav";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignupPage";
import DashboardPage from "../../pages/DashboardPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EmployeesPage from "@/pages/EmployeesPage";
import { Vacancies } from "../Vacancies/Vacancies";
import VacancyDetailsPage from "@/pages/VacancyDetailsPage";

const AppLayout = () => {
  const { isAuthenticated, isLoading } = useContext(SessionContext);
  const location = useLocation();
  return (
    <>
      {/* {!isAuthenticated && !isVerifying && location.pathname == "/login" ? (
        <LoginPage />
      ) : !isAuthenticated && !isVerifying && location.pathname == "/signup" ? (
        <SignUpPage />
      ) : ( */}
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <AppSidebarNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <AppHeader />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/vacancies/:vacancyId"
              element={<VacancyDetailsPage />}
            />
            <Route
              path="/employees"
              element={
                <PrivateRoute>
                  <EmployeesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/vacancies"
              element={
                <PrivateRoute>
                  <Vacancies />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default AppLayout;
