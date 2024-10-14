import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/AppLayout/AppLayout";
import GridItemsChart from "./components/GridItems/GridItemsChart";
import GridItemBottomLeft from "./components/GridItems/GridItemBottomLeft";
import GridItemTopRight from "./components/GridItems/GridItemTopRight";
import GridItemBottomRight from "./components/GridItems/GridItemBottomRight";
import { useContext } from "react";
import { SessionContext } from "./contexts/SessionContext";

function App() {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <AppLayout>
          <div className="grid grid-cols-l lg:grid-cols-4 lg:grid-rows-4 gap-4 h-full w-full">
            <div className="col-span-3 lg:row-span-3">
              <GridItemsChart />
            </div>
            <div className="row-start-2 lg:col-span-3 lg:row-start-4">
              <GridItemBottomLeft />
            </div>
            <div className="row-start-3 lg:row-span-1 lg:col-start-4">
              <GridItemTopRight />
            </div>
            <div className="row-start-4 lg:row-span-3 lg:col-start-4 lg:row-start-2">
              <GridItemBottomRight />
            </div>
          </div>
        </AppLayout>
      )}
    </>
  );
}

export default App;
