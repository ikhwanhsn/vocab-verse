"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="flex justify-between items-center h-16 px-24 bg-black">
      <Link href="/" className="text-2xl font-bold text-white">
        VocabVerse
      </Link>

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
        {status === "authenticated" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        )}
        {status === "unauthenticated" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn("google")}
          >
            Sign In
          </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
