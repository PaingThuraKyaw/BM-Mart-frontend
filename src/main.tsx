import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { theme } from "./style/theme.ts";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Router from "./router.tsx";
import "./style/global.module.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";


const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Router />} />)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
