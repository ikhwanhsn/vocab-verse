"use client";

import { useState } from "react";

const Tips = () => {
  const tips = {
    english: [
      "1. Read a book, news or novel that you like.",
      "2. Write vocabulary that you don't understand the meaning of on this website.",
      "3. Read the vocabulary you have written on this website five times every day.",
      "4. You don't need to memorize vocabulary, just read it five times every day.",
      "5. There is a sound feature to train your hearing and how to pronounce it correctly.",
      "6. On the fifth day, you will magically start to memorize the vocabulary you read every day.",
      "7. Use the hide feature to train how well your brain remembers vocabulary.",
      "8. Also use the language change feature to train in reverse.",
      "9. A miracle will happen, you can memorize the vocabulary you wrote without even memorizing it.",
    ],
    indonesia: [
      "1. Baca sebuah buku, berita, ataupun novel yang Anda sukai.",
      "2. Tulis kosakata yang belum Anda pahami artinya di website ini.",
      "3. Baca kosakata yang sudah Anda tulis di website ini lima kali setiap hari.",
      "4. Anda tidak perlu menghafalkan kosakata, cukup baca saja lima kali setiap hari.",
      "5. Ada fitur suara untuk melatih pendengaran dan cara mengucapkan yang benar.",
      "6. Di hari ke lima, secara ajaib Anda akan mulai hafal dengan kosakata yang Anda baca setiap hari.",
      "7. Gunakan fitur sembunyi untuk melatih seberapa bagus otak Anda mengingat kosakata.",
      "8. Gunakan juga fitur ganti bahasa untuk melatih secara kebalikan.",
      "9. Keajaiban akan terjadi, Anda bisa menghafal kosakata yang Anda tulis bahkan tanpa menghafalkannya.",
    ],
  };

  const catatan = {
    english: [
      "Just read one page every day, repeat until you memorize it then move on to the next page.",
      "On average you will memorize one page a week if you consistently do the tips above.",
    ],
    indonesia: [
      "Baca satu halaman saja setiap hari, ulangi sampai Anda hafal baru lanjut ke halaman berikutnya.",
      "Rata-rata Anda akan menghafal satu halaman dalam seminggu jika Anda konsisten melakukan tips diatas.",
    ],
  };
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <main className="md:w-2/5 md:mt-3 mt-0 min-h-screen w-full rounded-md md:mx-auto text-black bg-white md:pt-5 py-3 px-5 text-lg">
      <section className="relative">
        <h1 className="text-center font-bold mb-3">
          {isEnglish ? "Tips and Tricks" : "Tips dan Trik"}
        </h1>
        <div className="form-control absolute top-0 right-0">
          <label className="label cursor-pointer space-x-2">
            <span className="label-text text-black">English</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={isEnglish}
              onChange={() => setIsEnglish(!isEnglish)}
            />
          </label>
        </div>
      </section>
      <hr />
      <ul className="text-base mt-3">
        {!isEnglish &&
          tips.indonesia.map((tip, index) => <li key={index}>{tip}</li>)}
        {isEnglish &&
          tips.english.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
      <h1 className="mt-5 font-bold">{isEnglish ? "Notes" : "Catatan"} :</h1>
      <ul className="text-base mt-2 list-disc mb-5 ml-4">
        {!isEnglish &&
          catatan.indonesia.map((catatan, index) => (
            <li key={index}>{catatan}</li>
          ))}
        {isEnglish &&
          catatan.english.map((catatan, index) => (
            <li key={index}>{catatan}</li>
          ))}
      </ul>
    </main>
  );
};

export default Tips;
