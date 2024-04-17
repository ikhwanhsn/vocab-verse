import { getVocab } from "./getVocab";

export const handleSubmitVocab = async (
  valueEnglishAdd: string,
  valueIndonesianAdd: string,
  router: any,
  setValueEnglishAdd: any,
  setValueIndonesianAdd: any,
  setIsAddActive: Function,
  email: any
) => {
  // ===== Get user =====
  // const getUser = await fetch(`http://localhost:3000/api/user/${email}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const user = await getUser.json();

  // ===== Add vocab =====
  const res = await fetch("http://localhost:3000/api/vocabs", {
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
  router.push("/");
  router.refresh();
};
