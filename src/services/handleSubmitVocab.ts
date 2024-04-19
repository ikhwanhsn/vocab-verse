export const handleSubmitVocab = async (
  valueEnglishAdd: string,
  valueIndonesianAdd: string,
  router: any,
  setValueEnglishAdd: any,
  setValueIndonesianAdd: any,
  setIsAddActive: Function,
  email: any
) => {
  // ===== Add vocab =====
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vocabs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      english: valueEnglishAdd,
      indonesian: valueIndonesianAdd,
    }),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  // ===== Alert =====
  alert("Vocab added");
  setValueEnglishAdd("");
  setValueIndonesianAdd("");
  setIsAddActive(false);
  router.push("/home");
  router.refresh();
};
