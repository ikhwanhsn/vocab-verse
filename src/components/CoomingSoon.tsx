const CommingSoon = ({ title }: any) => {
  return (
    <main className="w-full flex flex-col items-center justify-center mt-44 text-sm text-black">
      <h1 className="mb-1 text-base font-bold">{title}</h1>
      <p className=" italic">Comming Soon...</p>
    </main>
  );
};

export default CommingSoon;
