import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
