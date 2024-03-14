import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Pagination = ({ page, setPage }: { page: any; setPage: any }) => {
  return (
    <section className="flex gap-1 justify-center items-center text-base">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        <MdNavigateBefore size={20} />
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        {page}
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        {page + 1}
      </button>
      <button
        className="bg-blue-400 text-white font-bold py-1 px-2 rounded"
        disabled
      >
        ...
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        9
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        10
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
        <MdNavigateNext size={20} />
      </button>
    </section>
  );
};

export default Pagination;
