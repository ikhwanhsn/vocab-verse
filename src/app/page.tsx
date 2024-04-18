import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full flex justify-center mt-44 text-sm">
      <Link href={"/home"} className="p-3 bg-blue-500 text-white rounded-md">
        Go to Homepage
      </Link>
    </main>
  );
}
