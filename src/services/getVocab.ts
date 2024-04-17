export const getVocab = async () => {
  const res = await fetch(`http://localhost:3000/api/vocabs`, {
    method: "GET",
  });
  if (res.ok) {
    const { vocabs } = await res.json();
    return vocabs;
  }
};
