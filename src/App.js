import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MaintenancePage from "./pages/maintenance-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  if (process.env.REACT_APP_IS_MAINTENANCE === "true") {
    return <MaintenancePage />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
