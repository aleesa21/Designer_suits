import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { lazy, Suspense } from "react";
import Layout from "./component/Layout";
import Home from "./pages/Home"; // static — needed on initial load

const Product = lazy(() => import("./pages/Product"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const AdminDashboard2 = lazy(() => import("./pages/AdminDashboard2"));
const AdminLayout = lazy(() => import("./component/AdminLayout"));
const AdminProducts = lazy(() => import("./pages/AdminProducts"));
const Categories = lazy(() => import("./pages/Categories"));
const Faq = lazy(() => import("./component/Faq"));
const Popup = lazy(() => import("./component/Popup"));
const Shopdetails = lazy(() => import("./component/Shopdetails"));
const Pastworks = lazy(() => import("./pages/Pastworks"));
const Socials=lazy(()=>import("./pages/Socials"));
// Helper function to stop repeating <Suspense>
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: withSuspense(Product) },
      { path: "/product/:id", element: withSuspense(ProductDetailPage) },
      { path: "/about", element: withSuspense(About) },
      { path: "/contact", element: withSuspense(Contact) },
      {path:"/socials",element:withSuspense(Socials)},
    ],
  },
  {
    path: "/admin2",
    element: withSuspense(AdminDashboard2),
  },
  {
    path: "admin",
    element: withSuspense(AdminLayout),
    children: [
      { index: true, element: withSuspense(AdminProducts) },
      { path: "categories", element: withSuspense(Categories) },
      { path: "past-works", element: withSuspense(Pastworks) },
      { path: "faq", element: withSuspense(Faq) },
      { path: "popup", element: withSuspense(Popup) },
      { path: "shop-details", element: withSuspense(Shopdetails) },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
