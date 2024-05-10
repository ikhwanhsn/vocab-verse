"use client";

import Image from "next/image";
import Link from "next/link";
import book from "../../public/img/book.png";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <main className="mx-auto w-full text-sm min-h-screen text-black relative md:px-40 px-5 md:pt-32 pt-32">
      <h1 className="mb-3 md:text-5xl text-4xl font-bold">VocabVerse</h1>
      <h3 className="text-xl">
        Learn english very fast and easily like a child,
        <br />
        with many tools that can help you growth so fast.
      </h3>
      <Link
        href={"/home"}
        className="p-3 btn-primary text-white rounded-md btn mt-5"
      >
        Go to Home Page🚀
      </Link>
      <Image
        src={book}
        alt="book"
        className="absolute right-24 top-10 hidden md:block"
        width={400}
        height={400}
      />
    </main>
  );
}
