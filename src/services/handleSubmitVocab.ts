export const handleSubmitVocab = async (
  valueEnglishAdd: string,
  valueIndonesianAdd: string,
  router: any,
  setValueEnglishAdd: any,
  setValueIndonesianAdd: any
) => {
  const res = await fetch("http://localhost:3000/api/vocabs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "1",
      english: valueEnglishAdd,
      indonesian: valueIndonesianAdd,
    }),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  alert("Vocab added");
  setValueEnglishAdd("");
  setValueIndonesianAdd("");
  router.push("/");
  router.refresh();
};
