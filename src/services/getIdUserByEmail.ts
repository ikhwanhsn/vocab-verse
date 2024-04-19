export const getIdUserByEmail = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/${email}`,
    {
      method: "GET",
    }
  );
  if (res.ok) {
    const { user } = await res.json();
    return user;
  }
};
