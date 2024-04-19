export const handleDeleteVocab = async (id: string, router: any) => {
  try {
    const confirm: any = window.confirm(
      "Are you sure you want to delete this vocab?"
    );
    if (!confirm) {
      return;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/vocabs?id=${id}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to delete");
    }
    alert("Vocab deleted");
    router.refresh();
    router.push("/home");
  } catch (error) {
    console.log(error);
  }
};
