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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Router />} />)
);

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
