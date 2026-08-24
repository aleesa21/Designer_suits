import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminDashboard2 from "./pages/AdminDashboard2";
import AdminLayout from "./component/AdminLayout";
import AdminProducts from "./pages/AdminProducts";
import Categories from "./pages/Categories";
import Faq from "./component/Faq";
import Popup from "./component/Popup";
import Shopdetails from "./component/Shopdetails";
import Pastworks from "./pages/Pastworks";

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
  {
    path: "/admin2",
    element: <AdminDashboard2 />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminProducts />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "past-works",
        element: <Pastworks />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "popup",
        element: <Popup />,
      },
      {
        path: "shop-details",
        element: <Shopdetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
