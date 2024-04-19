export const getUser = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${id}`, {
    method: "GET",
  });
  if (res.ok) {
    const { user } = await res.json();
    return user;
  }
};
