import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-80 bg-black">
      <Link href="/" className="text-2xl font-bold text-white">
        VocabVerse
      </Link>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
