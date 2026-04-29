import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Products } from "./components/Products";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "experience", Component: Experience },
      { path: "products", Component: Products },
      { path: "about", Component: About },
    ],
  },
]);
