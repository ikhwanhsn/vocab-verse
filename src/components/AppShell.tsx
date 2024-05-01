"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const disableNavbar = [""];
  const pathname = usePathname();

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <section className="h-16 w-full"></section>
      {children}
      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
