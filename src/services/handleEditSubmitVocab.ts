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
        newEnglish,
        newIndonesian,
      }),
    }
  );
  if (res.ok) {
    alert("Vocab updated");
  } else {
    alert("Failed to updated");
  }
  setIsEditActive(false);
  router.refresh();
};
