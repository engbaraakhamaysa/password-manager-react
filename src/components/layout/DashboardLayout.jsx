import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div>
      <Header />

      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
