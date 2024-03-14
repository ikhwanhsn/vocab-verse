export const handleDeleteVocab = async (id: string, router: any) => {
  try {
    const confirm: any = window.confirm(
      "Are you sure you want to delete this vocab?"
    );
    if (!confirm) {
      return;
    }
    const res = await fetch(`http://localhost:3000/api/vocabs?id=${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete");
    }
    alert("Vocab deleted");
    router.refresh();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
