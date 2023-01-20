import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import query client and client provider
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsList1 from "./PostsList1";
import PostList2 from "./assets/PostList2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/postlist1", element: <PostsList1 /> },
      { path: "/postlist2", element: <PostList2 /> },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
