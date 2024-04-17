"use client";

import { GoArrowSwitch } from "react-icons/go";
import { IoShuffleOutline } from "react-icons/io5";
import { IoMdAdd, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { GrClearOption, GrClear } from "react-icons/gr";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdAutoFixNormal } from "react-icons/md";
import { fetcher } from "@/libs/swr/fetcher";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { handleSubmitVocab } from "@/services/handleSubmitVocab";
import { handleDeleteVocab } from "@/services/handleDeleteVocab";
import { handleEditVocab } from "@/services/handleEditVocab";
import { handleEditSubmitVocab } from "@/services/handleEditSubmitVocab";
import Pagination from "./Pagination";
import VocabLoading from "./VocabLoading";
import { useSession } from "next-auth/react";
import { getUser } from "@/services/getUser";
import { getIdUserByEmail } from "@/services/getIdUserByEmail";

function shuffleArray(array: any) {
  function randomSort() {
    return Math.random() - 0.5;
  }
  array.sort(randomSort);
  return array;
}

const Vocabulary = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [dataVocab, setDataVocab] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [idEdit, setIdEdit] = useState("");
  const [isMainEnglish, setIsMainEnglish] = useState(true);
  const [isHideAll, setIsHideAll] = useState(true);
  const [isHideAction, setIsHideAction] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isAddActive, setIsAddActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [valueEnglishAdd, setValueEnglishAdd] = useState("");
  const [valueIndonesianAdd, setValueIndonesianAdd] = useState("");
  const [newEnglish, setNewEnglish] = useState("");
  const [newIndonesian, setNewIndonesian] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const { data, error, isLoading } = useSWR(
    `/api/vocabs?page=${page}&limit=${limit}`,
    fetcher
  );
  const hideAll = () => {
    setIsHideAll(!isHideAll);
  };
  const shuffle = () => {
    setIsShuffle(!isShuffle);
    if (!isShuffle) {
      setOriginalData([...dataVocab]);
      const data = shuffleArray(dataVocab);
      setDataVocab(data);
    } else {
      setDataVocab(originalData);
    }
  };

  const submitAdd = async (e: any) => {
    e.preventDefault();
    handleSubmitVocab(
      valueEnglishAdd,
      valueIndonesianAdd,
      router,
      setValueEnglishAdd,
      setValueIndonesianAdd,
      setIsAddActive,
      session?.user?.email
    );
  };
  const handleEditSubmit = async (e: any) => {
    e.preventDefault();
    handleEditSubmitVocab(
      idEdit,
      newEnglish,
      newIndonesian,
      router,
      setIsEditActive
    );
  };

  const filteredData = async (data: Array<any>) => {
    const user = await getIdUserByEmail(session?.user?.email as string);

    if (data && user) {
      const filtered: any = data.filter((item) => {
        return item?.user_id === user._id;
      });
      setDataVocab(filtered);
    } else {
      setDataVocab([]);
    }
  };

  useEffect(() => {
    if (data) {
      filteredData(data);
    }
  }, [data]);

  return (
    // ========= HTML ===========
    <main className="w-2/5 rounded-md mx-auto text-black bg-white pt-5 py-3 px-5 text-lg">
      <section className="flex justify-between items-center font-bold">
        <aside className="flex gap-4 text-xl items-center">
          <h2 className="w-20">{isMainEnglish ? "English" : "IndoNes"}</h2>
          <button
            className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-sm"
            onClick={() => setIsMainEnglish(!isMainEnglish)}
          >
            <GoArrowSwitch size={15} />
          </button>
          <h2 className="w-20">{!isMainEnglish ? "English" : "IndoNes"}</h2>
        </aside>
        <aside className="space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => {
              setIsEditActive(false);
              setIsAddActive(!isAddActive);
            }}
          >
            <IoMdAdd size={20} />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => shuffle()}
          >
            {!isShuffle && <IoShuffleOutline size={20} />}
            {isShuffle && <MdAutoFixNormal size={20} />}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => hideAll()}
          >
            {!isHideAll && <IoMdEye size={20} />}
            {isHideAll && <IoMdEyeOff size={20} />}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => {
              setIsHideAction(!isHideAction);
              setIsEditActive(false);
            }}
          >
            {isHideAction && <GrClearOption size={20} />}
            {!isHideAction && <GrClear size={20} />}
          </button>
        </aside>
      </section>
      <hr className="my-3" />
      {/* ===== ADD VOCAB ===== */}
      {isAddActive && (
        <form
          className="mb-3 flex flex-row gap-1 text-base"
          onSubmit={submitAdd}
        >
          <input
            type="text"
            name="english"
            id="english"
            placeholder="English"
            value={valueEnglishAdd}
            onChange={(e) => setValueEnglishAdd(e.target.value)}
            autoFocus={isAddActive}
            className="border py-2 px-3 rounded-md w-48"
          />
          <input
            type="text"
            name="indonesian"
            id="indonesian"
            placeholder="Indonesian"
            value={valueIndonesianAdd}
            onChange={(e) => setValueIndonesianAdd(e.target.value)}
            className="border py-2 px-3 rounded-md w-48"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-full">
            Add
          </button>
        </form>
      )}
      {/* ===== EDIT VOCAB ===== */}
      {isEditActive && (
        <form
          className="mb-3 flex flex-row gap-1 text-base"
          onSubmit={handleEditSubmit}
        >
          <input
            type="text"
            name="english"
            id="english"
            placeholder="English"
            value={newEnglish}
            onChange={(e) => setNewEnglish(e.target.value)}
            autoFocus={isEditActive}
            className="border py-2 px-3 rounded-md w-48"
          />
          <input
            type="text"
            name="indonesian"
            id="indonesian"
            placeholder="Indonesian"
            value={newIndonesian}
            onChange={(e) => setNewIndonesian(e.target.value)}
            className="border py-2 px-3 rounded-md w-48"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded w-full">
            Edit
          </button>
        </form>
      )}
      {/* {<p className="text-center text-base">No Data</p>} */}
      {isLoading && <VocabLoading />}
      {dataVocab.length > 0 &&
        dataVocab.map((vocab: any) => {
          return (
            <section
              key={vocab._id}
              className={`grid gap-3 items-center mb-1 ${
                isHideAction ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              <p className="flex gap-1 items-center text-start">
                {isMainEnglish ? vocab.english : vocab.indonesian}
                <HiOutlineSpeakerWave
                  size={22}
                  className="cursor-pointer hover:bg-gray-300 p-1 rounded-full"
                />
              </p>
              <section
                className={`relative w-fit ${isHideAll && "cursor-pointer"}`}
              >
                <p
                  className={`flex gap-1 items-center text-start w-fit vocabHidden`}
                >
                  {!isMainEnglish ? vocab.english : vocab.indonesian}
                  <HiOutlineSpeakerWave
                    size={22}
                    className={`cursor-pointer hover:bg-gray-300 p-1 rounded-full ${
                      isHideAll && "hidden"
                    }`}
                  />
                </p>
                {isHideAll && (
                  <aside className="absolute top-0 left-0 z-20 bg-white w-full hover:opacity-0 text-lg">
                    *****
                  </aside>
                )}
              </section>
              {!isHideAction && (
                <aside className="flex gap-1 w-fit ml-auto">
                  <button
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-2 rounded h-fit w-fit"
                    onClick={() =>
                      handleEditVocab(
                        vocab._id,
                        setIsAddActive,
                        setIsEditActive,
                        setIdEdit,
                        setNewEnglish,
                        setNewIndonesian
                      )
                    }
                  >
                    <RiEdit2Line size={15} />
                  </button>
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded h-fit w-fit"
                    onClick={() => handleDeleteVocab(vocab._id, router)}
                  >
                    <AiOutlineDelete size={15} />
                  </button>
                </aside>
              )}
            </section>
          );
        })}
      {!isLoading && dataVocab.length > 0 && (
        <Pagination page={page} setPage={setPage} limit={limit} />
      )}
    </main>
  );
};

export default Vocabulary;
