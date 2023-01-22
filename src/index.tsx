import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import LoginPage from "./components/Login";

declare global {
  interface Window {
    naver: any;
  }
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <App />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<RouterProvider router={router} />);
