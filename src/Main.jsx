import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@pages/App";
import Home from "@pages/Home";
import About from "@pages/About"; // ✅ Asegúrate de importar Home
import Lodging from '@pages/Lodging';
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path:"", element: <Home />,
        children: [
          {path: "lodging/:id", element: <Lodging />},
        ]
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "error",
        element: <Error />,
      }
    ],
  },
]);


console.log("Main.jsx se ejecuta");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);