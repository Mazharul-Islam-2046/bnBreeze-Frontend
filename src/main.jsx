import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";

// Import pages
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/auth_pages/Register/Register.jsx";
import SignIn from "./pages/auth_pages/SignIn/SignIn.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashboardHome from "./pages/Dashboard/Pages/DashboardHome.jsx";
import MyBookings from "./pages/Dashboard/Pages/MyBookings.jsx";
import MyListings from "./pages/Dashboard/Pages/MyListings.jsx";
import Settings from "./pages/Dashboard/Pages/Settings.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/my-listings",
        element: <MyListings />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      }
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
