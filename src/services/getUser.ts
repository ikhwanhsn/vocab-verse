export const getUser = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}`, {
    method: "GET",
  });
  if (res.ok) {
    const { user } = await res.json();
    return user;
  }
};
