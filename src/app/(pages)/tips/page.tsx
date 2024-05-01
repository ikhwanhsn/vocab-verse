const Tips = () => {
  const tips = [
    "1. Baca sebuah buku, berita, ataupun novel yang Anda sukai.",
    "2. Tulis kosakata yang belum Anda pahami artinya di website ini.",
    "3. Baca kosakata yang sudah Anda tulis di website ini lima kali setiap hari.",
    "4. Anda tidak perlu menghafalkan kosakata, cukup baca saja lima kali setiap hari.",
    "5. Ada fitur suara untuk melatih pendengaran dan cara mengucapkan yang benar.",
    "6. Di hari ke lima, secara ajaib Anda akan mulai hafal dengan kosakata yang Anda baca setiap hari.",
    "7. Gunakan fitur sembunyi untuk melatih seberapa bagus otak Anda mengingat kosakata.",
    "8. Gunakan juga fitur ganti bahasa untuk melatih secara kebalikan.",
    "9. Keajaiban akan terjadi, Anda bisa menghafal kosakata yang Anda tulis bahkan tanpa menghafalkannya.",
  ];

  const catatan = [
    "Baca satu halaman saja setiap hari, ulangi sampai Anda hafal baru lanjut ke halaman berikutnya.",
    "Rata-rata Anda akan menghafal satu halaman dalam seminggu jika Anda konsisten melakukan tips diatas.",
  ];

  return (
    <main className="md:w-2/5 mt-3 min-h-screen w-full rounded-md md:mx-auto text-black bg-white md:pt-5 py-3 px-5 text-lg">
      <h1 className="text-center font-bold">Tips dan Trik</h1>
      <ul className="text-base mt-5">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <h1 className="mt-5 font-bold">Catatan :</h1>
      <ul className="text-base mt-2 list-disc mb-5">
        {catatan.map((catatan, index) => (
          <li key={index}>{catatan}</li>
        ))}
      </ul>
    </main>
  );
};

export default Tips;
