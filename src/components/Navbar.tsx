"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/img/logo.png";

const dataNavbar = ["Home", "Tips", "About"];

const Navbar = () => {
  const { status, data: session } = useSession();
  const pathname = usePathname();
  return (
    <nav className="grid grid-cols-3 items-center h-16 px-24 bg-black">
      <section className="flex gap-2 items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <Link href="/" className="text-2xl font-bold text-white">
          VocabVerse
        </Link>
      </section>
      <ul className="flex gap-4 items-center mx-auto">
        {dataNavbar.map((item, index) => (
          <li
            key={index}
            className={`hover:border-b ${
              pathname === `/${item.toLocaleLowerCase()}` && "border-b"
            }`}
          >
            <Link href={`/${item.toLowerCase()}`} className="text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <section className="flex gap-3 place-content-end">
        {status === "authenticated" && (
          <section className="text-white flex relative">
            <Image
              src={session?.user?.image || ""}
              alt="user image"
              width={40}
              height={40}
              className="mx-auto rounded-full shadow-md bg-white"
            />
          </section>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            status === "authenticated" ? signOut() : signIn("google")
          }
        >
          {status === "authenticated" ? "Sign Out" : "Sign In"}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
