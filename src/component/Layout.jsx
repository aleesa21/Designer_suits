import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import SmoothScroll from "./SmoothScroll";

function Layout() {
  return (
    <SmoothScroll>
      <section>
        <Header />
        <Outlet />
        <Footer />
      </section>
    </SmoothScroll>
  );
}

export default Layout;
