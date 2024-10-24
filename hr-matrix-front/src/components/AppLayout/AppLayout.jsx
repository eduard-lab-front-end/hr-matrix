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
import EmployeesDetailsPage from "@/pages/EmployeesDetailsPage";
import Profile from "../Profile/Profile";
import NotFoundPage from "@/pages/NotFoundPage";
import Applicants from "../Applicants/Applicants";

const AppLayout = () => {
  const { user } = useContext(SessionContext)
  const location = useLocation()
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {user && <AppSidebarNav userId={user._id}/>}
        <div className={`flex flex-col sm:gap-4 ${location.pathname == '/login' || location.pathname == '/signup' ? 'sm:py-0 sm:pl-0' : 'sm:py-4 sm:pl-14'}`}>
        {user && <AppHeader  userId={user._id}/>} 
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
              path="/vacancies"
              element={
                <PrivateRoute>
                  <Vacancies />
                </PrivateRoute>
              }
            />
            <Route
              path="/vacancies/:vacancyId"
              element={
                <PrivateRoute>
                  <VacancyDetailsPage />
                </PrivateRoute>
              }
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
              path="/employees/:employeeId"
              element={
                <PrivateRoute>
                  <EmployeesDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/:profileId"
              element={
                <PrivateRoute>
                  <Profile user={user}/>
                </PrivateRoute>
              }
            />
            <Route
              path="/applicants"
              element={
                <PrivateRoute>
                  <Applicants />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default AppLayout;
