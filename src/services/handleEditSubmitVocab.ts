import Swal from "sweetalert2";

export const handleEditSubmitVocab = async (
  idEdit: string,
  newEnglish: string,
  newIndonesian: string,
  router: any,
  setIsEditActive: any
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/vocabs/${idEdit}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newEnglish: newEnglish.toLowerCase(),
        newIndonesian: newIndonesian.toLowerCase(),
      }),
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  setIsEditActive(false);
  Swal.fire({
    title: "Success!",
    text: "Your vocab has been updated!",
    icon: "success",
  });
};
