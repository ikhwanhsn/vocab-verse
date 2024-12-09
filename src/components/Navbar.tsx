"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/img/logo.png";

// const dataNavbar = ["Home", "Tips", "About"];
const dataNavbar = [
  {
    name: "Home",
    link: "/home?page=1",
  },
  {
    name: "Tips",
    link: "/tips",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const { status, data: session } = useSession();
  const pathname = usePathname();
  return (
    <nav className="navbar bg-black md:px-12 px-3 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {dataNavbar.map((item, index) => (
              <li
                key={index}
                className={`hover:border-b ${
                  pathname === `/${item.name.toLocaleLowerCase()}` && "border-b"
                }`}
              >
                <Link href={item.link} className="text-white">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={"/profile"} className="text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link href={"/setting"} className="text-white">
                Setting
              </Link>
            </li>
            <li>
              <button onClick={() => signOut()} className="text-white">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
        <Image src={logo} alt="logo" width={40} height={40} />
        <Link href="/" className="text-2xl font-bold text-white ml-1">
          VocabVerse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {dataNavbar.map((item, index) => (
            <li
              key={index}
              className={`hover:border-b ${
                pathname === `/${item.name.toLocaleLowerCase()}` && "border-b"
              }`}
            >
              <Link href={item.link} className="text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {status === "authenticated" && (
          <div className="dropdown dropdown-end md:block hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={session?.user?.image || ""}
                  alt="user image"
                  width={40}
                  height={40}
                  className="mx-auto rounded-full shadow-md bg-white hidden md:block"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/setting">Settings</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            </ul>
          </div>
        )}
        {status === "unauthenticated" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md h-10 w-28"
            onClick={() => signIn("google")}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
