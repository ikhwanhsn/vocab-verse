import Swal from "sweetalert2";

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
      english: valueEnglishAdd.toLowerCase(),
      indonesian: valueIndonesianAdd.toLowerCase(),
    }),
  });
  const message = await res.json();
  if (!res.ok) {
    Swal.fire({
      title: "Error!",
      text: message.message,
      icon: "error",
    });
    setValueEnglishAdd("");
    setValueIndonesianAdd("");
    return;
  }
  // ===== Alert =====
  setValueEnglishAdd("");
  setValueIndonesianAdd("");
  setIsAddActive(false);
  Swal.fire({
    title: "Success!",
    text: message.message,
    icon: "success",
  });
};
