export const getIdUserByEmail = async (email: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${email}`, {
    method: "GET",
  });
  if (res.ok) {
    const { user } = await res.json();
    return user;
  }
};
