import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import SignInUp from "./components/authentication/SignInUp";
import Register from "./components/authentication/Register";
import Error from "./components/Error";
import Services from "./components/Services";

// App layout component
const AppLayout = () => {
  return (
    <div className="container">
      <Header className="fixed top-0 left-0" />
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <SignInUp />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignInUp />,
      },
      {
        path:"/services",
        element:<Services/>
      }
    ],
    errorElement: <Error />, // Render this component in case of errors
  },
]);

// Main App component
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
