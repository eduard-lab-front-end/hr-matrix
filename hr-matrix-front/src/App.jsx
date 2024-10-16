import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/AppLayout/AppLayout";
import GridItemsChart from "./components/GridItems/GridItemsChart";
import GridItemBottomLeft from "./components/GridItems/GridItemBottomLeft";
import GridItemTopRight from "./components/GridItems/GridItemTopRight";
import GridItemBottomRight from "./components/GridItems/GridItemBottomRight";
import { useContext } from "react";
import { SessionContext } from "./contexts/SessionContext";
import SignUpPage from "./pages/SignupPage";
import { Link, Route, Routes } from "react-router-dom";

import {
  File,
  Home,
  Image,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";




import AppSidebarNav from "./components/AppLayout/AppSidebar/AppSidebarNav";
import AppHeader from "./components/AppLayout/AppHeader/AppHeader";

function App() {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    // <Routes>
      // <Route path="/signup" element={<SignUpPage />} />
      // <Route path="/login" element={<LoginPage />} />
      // <Route
      //   path="/"
      //   element={
      //     !isAuthenticated ? (
      //       <LoginPage />
      //     ) : (
      //       <AppLayout>
      //         {" "}
      //         <div className="grid grid-cols-l lg:grid-cols-4 lg:grid-rows-4 gap-4 h-full w-full">
      //           <div className="col-span-3 lg:row-span-3">
      //             <GridItemsChart />
      //           </div>
      //           <div className="row-start-2 lg:col-span-3 lg:row-start-4">
      //             <GridItemBottomLeft />
      //           </div>
      //           <div className="row-start-3 lg:row-span-1 lg:col-start-4">
      //             <GridItemTopRight />
      //           </div>
      //           <div className="row-start-4 lg:row-span-3 lg:col-start-4 lg:row-start-2">
      //             <GridItemBottomRight />
      //           </div>
      //         </div>{" "}
      //       </AppLayout>
      //     )
      //   }
      // />
    // </Routes>

    <AppLayout />
  );
}

export default App;
