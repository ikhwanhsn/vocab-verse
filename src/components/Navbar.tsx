"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="flex justify-between items-center h-16 px-24 bg-black">
      <Link href="/" className="text-2xl font-bold text-white">
        VocabVerse
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href="/home" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/tips" className="text-white hover:underline">
            Tips
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </li>
      </ul>
      <section className="flex gap-3">
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
