import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <section className="flex h-screen w-full ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </section>
  );
}

export default AdminLayout;
