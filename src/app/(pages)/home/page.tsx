import Vocabulary from "@/components/Vocabulary";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<></>}>
      <main className="bg-gray-50 md:py-3 py-0 min-h-screen">
        <Vocabulary />
      </main>
    </Suspense>
  );
};

export default Home;
