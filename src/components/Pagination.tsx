import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Pagination = ({
  page,
  setPage,
  vocab,
}: {
  page: any;
  setPage: any;
  vocab: any;
}) => {
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < vocab.length / 50) {
      setPage(page + 1);
    }
  };

  return (
    <section className="flex gap-1 justify-center items-center text-base">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-7 h-7">
        <MdNavigateBefore size={20} className="-ml-1" onClick={prevPage} />
      </button>
      <button
        className="bg-blue-500 border-2 border-black hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-8 h-8"
        onClick={() => setPage(page)}
      >
        {page}
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-8 h-8">
        {page + 1}
      </button>
      <button
        className="bg-blue-400 text-white font-bold py-1 px-2 rounded w-8 h-8"
        disabled
      >
        ...
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-8 h-8">
        {vocab.length > 150 ? vocab.length / 50 : 3}
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-8 h-8">
        {vocab.length > 200 ? vocab.length / 50 : 4}
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-7 h-7">
        <MdNavigateNext size={20} className="-ml-1" onClick={nextPage} />
      </button>
    </section>
  );
};

export default Pagination;
