"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const disableNavbar = ["/"];
  const pathname = usePathname();

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <section className="h-16 w-full"></section>
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
