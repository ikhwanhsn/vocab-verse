"use client";

import { fetcher } from "@/libs/swr/fetcher";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import useSWR from "swr";

const Pagination = ({ page, setPage, limit, shuffle }: any) => {
  const { data: session } = useSession();
  const [dataVocab, setDataVocab] = useState([]);
  const [total, setTotal] = useState(0);

  const { data, error, isLoading } = useSWR(
    `/api/vocabs?email=${session?.user?.email}&page=${page}&limit=${limit}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setDataVocab(data.vocabs);
      setTotal(data.total);
    }
  }, [data]);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      shuffle(false);
    }
  };

  const nextPage = () => {
    if (dataVocab.length === limit) {
      setPage(page + 1);
      shuffle(false);
    }
  };

  return (
    <section className="flex gap-1 justify-center items-center text-base mt-3">
      <button
        className={`disabled:bg-blue-400 disabled:hover:bg-blue-400 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-7 h-7`}
        disabled={page === 1}
        onClick={prevPage}
      >
        <MdNavigateBefore size={20} className="-ml-1" />
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-sm h-7 relative">
        {`Page ${page}`}
        <select
          name="page"
          id="page"
          onChange={(e) => {
            setPage(parseInt(e.target.value));
          }}
          className="absolute top-0 left-0 w-full h-full opacity-0 bg-blue-500 cursor-pointer"
        >
          {Array.from({ length: Math.ceil(total / limit) }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </button>
      <button
        className={`disabled:bg-blue-400 disabled:hover:bg-blue-400 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-7 h-7`}
        disabled={dataVocab.length < limit}
        onClick={nextPage}
      >
        <MdNavigateNext size={20} className="-ml-1" />
      </button>
    </section>
  );
};

export default Pagination;
