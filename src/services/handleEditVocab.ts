export const handleEditVocab = async (
  id: string,
  setIsAddActive: any,
  setIsEditActive: any,
  setIdEdit: any,
  setNewEnglish: any,
  setNewIndonesian: any
) => {
  setIsAddActive(false);
  setIsEditActive(true);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/vocabs/${id}`,
    {
      method: "GET",
    }
  );
  if (res.ok) {
    const { vocab } = await res.json();
    setIdEdit(vocab._id);
    setNewEnglish(vocab.english);
    setNewIndonesian(vocab.indonesian);
  }
};
