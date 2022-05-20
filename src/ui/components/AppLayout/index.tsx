import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppLayout = () => {
  return (
    <main className="min-vh-100 overflow-auto d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
