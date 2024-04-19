export const getVocab = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vocabs`, {
    method: "GET",
  });
  if (res.ok) {
    const { vocabs } = await res.json();
    return vocabs;
  }
};
