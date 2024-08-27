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
import { signIn, signOut, useSession } from "next-auth/react";
import { textToSpeech } from "@/services/textToSpeech";

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
    `/api/vocabs?email=${session?.user?.email}&page=${page}&limit=${limit}`,
    fetcher,
    { refreshInterval: 1000 }
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

  useEffect(() => {
    if (data) {
      setDataVocab(data.vocabs);
    }
  }, [data]);
  useEffect(() => {
    router.push(`/home?page=${page}`);
  }, [page]);

  return (
    // ========= HTML ===========
    <>
      {status === "authenticated" && (
        <main className="md:w-2/5 w-full rounded-md md:mx-auto text-black bg-white md:pt-5 py-3 px-5 text-lg">
          <section className="flex justify-between items-center font-bold">
            <aside className="flex gap-4 text-xl items-center">
              <h2 className="w-20">{isMainEnglish ? "English" : "IndoNes"}</h2>
              <button
                className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-sm disabled:cursor-not-allowed"
                onClick={() => setIsMainEnglish(!isMainEnglish)}
                disabled={dataVocab.length === 0}
              >
                <GoArrowSwitch size={15} />
              </button>
              <h2 className="w-20 hidden md:block">
                {!isMainEnglish ? "English" : "IndoNes"}
              </h2>
            </aside>
            <aside className="space-x-2 mt-1 md:mt-0">
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
                className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => shuffle()}
                disabled={dataVocab.length === 0}
              >
                {!isShuffle && <IoShuffleOutline size={20} />}
                {isShuffle && <MdAutoFixNormal size={20} />}
              </button>
              <button
                className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => hideAll()}
                disabled={dataVocab.length === 0}
              >
                {!isHideAll && <IoMdEye size={20} />}
                {isHideAll && <IoMdEyeOff size={20} />}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed text-white font-bold py-1 px-2 rounded"
                onClick={() => {
                  setIsHideAction(!isHideAction);
                  setIsEditActive(false);
                }}
                disabled={dataVocab.length === 0}
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
              className="mb-3 flex flex-row gap-1 text-base w-full"
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
                className="border py-2 px-3 rounded-md md:w-48 w-full bg-white"
              />
              <input
                type="text"
                name="indonesian"
                id="indonesian"
                placeholder="Indonesian"
                value={valueIndonesianAdd}
                onChange={(e) => setValueIndonesianAdd(e.target.value)}
                className="border py-2 px-3 rounded-md md:w-48 w-full bg-white"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded md:w-full">
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
                className="border py-2 px-3 rounded-md md:w-48 w-full bg-white"
              />
              <input
                type="text"
                name="indonesian"
                id="indonesian"
                placeholder="Indonesian"
                value={newIndonesian}
                onChange={(e) => setNewIndonesian(e.target.value)}
                className="border py-2 px-3 rounded-md md:w-48 w-full bg-white"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded md:w-full">
                Edit
              </button>
            </form>
          )}
          {dataVocab.length === 0 && !isLoading && (
            <p className="text-center text-base">No Data</p>
          )}
          {isLoading && <VocabLoading />}
          {dataVocab.length > 0 &&
            !isLoading &&
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
                      onClick={() =>
                        textToSpeech(
                          isMainEnglish ? vocab.english : vocab.indonesian,
                          isMainEnglish ? "en-US" : "id"
                        )
                      }
                      className="cursor-pointer hover:bg-gray-300 p-1 rounded-full"
                    />
                  </p>
                  <section
                    className={`relative w-fit ${
                      isHideAll && "cursor-pointer"
                    }`}
                  >
                    <p
                      className={`flex gap-1 items-center text-start w-fit vocabHidden ${
                        isHideAll && "truncate"
                      }`}
                    >
                      {!isMainEnglish ? vocab.english : vocab.indonesian}
                      <HiOutlineSpeakerWave
                        size={22}
                        onClick={() =>
                          textToSpeech(
                            !isMainEnglish ? vocab.english : vocab.indonesian,
                            !isMainEnglish ? "en-US" : "id"
                          )
                        }
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
                    <aside className="flex gap-1 w-fit ml-auto z-20 bg-white">
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
            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              shuffle={setIsShuffle}
            />
          )}
        </main>
      )}
      {status === "unauthenticated" && (
        <section className="text-center mt-40 text-black">
          <p>Please login to access this page</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => signIn("google")}
          >
            Sign In with Google🚀
          </button>
        </section>
      )}
    </>
  );
};

export default Vocabulary;
