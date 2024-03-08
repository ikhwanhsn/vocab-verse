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
];

const Vocabulary = () => {
  const [isMainEnglish, setIsMainEnglish] = useState(true);
  const [isHideAll, setIsHideAll] = useState(true);
  const [isHideAction, setIsHideAction] = useState(true);
  const hideOne = () => {
    setIsHideAll(!isHideAll);
  };
  return (
    <main className="w-2/5 rounded-md mx-auto text-black bg-white pt-5 py-3 px-5">
      <section className="flex justify-between items-center font-bold">
        <aside className="flex gap-4 text-lg items-center">
          <h2 className="w-16">{isMainEnglish ? "English" : "IndoNes"}</h2>
          <button
            className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-sm"
            onClick={() => setIsMainEnglish(!isMainEnglish)}
          >
            <GoArrowSwitch size={15} />
          </button>
          <h2 className="w-16">{!isMainEnglish ? "English" : "IndoNes"}</h2>
        </aside>
        <aside className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
            <IoMdAdd size={20} />
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
            <IoShuffleOutline size={20} />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => setIsHideAll(!isHideAll)}
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
      {vocabs.map((vocab) => {
        return (
          <section
            className={`grid gap-3 items-center mb-2 ${
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
            <p
              id="vocabHidden"
              className={`flex gap-1 items-center text-start cursor-pointer`}
              onClick={hideOne}
            >
              {!isMainEnglish ? vocab.english : vocab.indonesian}
              <HiOutlineSpeakerWave
                size={22}
                className="cursor-pointer hover:bg-gray-300 p-1 rounded-full"
              />
            </p>
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
