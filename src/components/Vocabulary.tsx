"use client";

import { GoArrowSwitch } from "react-icons/go";
import { IoShuffleOutline } from "react-icons/io5";
import { IoMdAdd, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { GrClearOption, GrClear } from "react-icons/gr";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const vocabs = [
  {
    id: 1,
    english: "first",
    indonesian: "pertama",
  },
  {
    id: 2,
    english: "second",
    indonesian: "kedua",
  },
  {
    id: 3,
    english: "third",
    indonesian: "ketiga",
  },
  {
    id: 4,
    english: "fourth",
    indonesian: "keempat",
  },
  {
    id: 5,
    english: "fifth",
    indonesian: "kelima",
  },
];

function shuffleArray(array: any) {
  function randomSort() {
    return Math.random() - 0.5;
  }
  array.sort(randomSort);
  return array;
}

const Vocabulary = () => {
  const [dataVocab, setDataVocab] = useState(vocabs);
  const [isMainEnglish, setIsMainEnglish] = useState(true);
  const [isHideAll, setIsHideAll] = useState(true);
  const [isHideAction, setIsHideAction] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isAddActive, setIsAddActive] = useState(false);
  const hideAll = () => {
    setIsHideAll(!isHideAll);
  };
  const hideOne = (data: string) => {
    // setIsHideAll(!isHideAll);
    alert(data);
  };
  const shuffle = () => {
    setIsShuffle(!isShuffle);
    const data = shuffleArray(dataVocab);
    setDataVocab(data);
  };
  return (
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
            onClick={() => setIsAddActive(!isAddActive)}
          >
            <IoMdAdd size={20} />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => shuffle()}
          >
            <IoShuffleOutline size={20} />
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
            onClick={() => setIsHideAction(!isHideAction)}
          >
            {isHideAction && <GrClearOption size={20} />}
            {!isHideAction && <GrClear size={20} />}
          </button>
        </aside>
      </section>
      <hr className="my-3" />
      {isAddActive && (
        <section className="mb-3 flex flex-row gap-1">
          <input
            type="text"
            name="english"
            id="english"
            placeholder="English"
            className="border py-1 px-3 rounded-md w-48"
          />
          <input
            type="text"
            name="indonesian"
            id="indonesian"
            placeholder="Indonesian"
            className="border py-1 px-3 rounded-md w-48"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded w-full">
            Add
          </button>
        </section>
      )}
      {dataVocab.length === 0 && <p className="text-center">No Data</p>}
      {dataVocab.length > 0 &&
        dataVocab.map((vocab: any) => {
          return (
            <section
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
              {!isHideAll && (
                <p
                  className={`flex gap-1 items-center text-start cursor-pointer w-fit vocabHidden`}
                  onClick={() => hideOne(vocab.english)}
                >
                  {!isMainEnglish ? vocab.english : vocab.indonesian}
                  <HiOutlineSpeakerWave
                    size={22}
                    className="cursor-pointer hover:bg-gray-300 p-1 rounded-full"
                  />
                </p>
              )}
              {isHideAll && "*****"}
              {!isHideAction && (
                <aside className="flex gap-1 w-fit ml-auto">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-2 rounded h-fit w-fit">
                    <RiEdit2Line size={15} />
                  </button>
                  <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded h-fit w-fit">
                    <AiOutlineDelete size={15} />
                  </button>
                </aside>
              )}
            </section>
          );
        })}
    </main>
  );
};

export default Vocabulary;
