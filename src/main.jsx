import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./app/pages/home-page/HomePage";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./app/utils/ScrollToTop";
import App from "./app/layouts/main-layout/App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <App />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
