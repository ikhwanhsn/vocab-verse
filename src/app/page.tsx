"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status]);

  return (
    <main className="mx-auto w-full flex justify-center mt-44 text-sm min-h-screen">
      <Link
        href={"/home"}
        className="p-3 btn-primary text-white rounded-md btn"
      >
        Go to Homepage
      </Link>
    </main>
  );
}
