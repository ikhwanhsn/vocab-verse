import Swal from "sweetalert2";

export const handleDeleteVocab = async (id: string, router: any) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/vocabs?id=${id}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          throw new Error("Failed to delete vocab");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
