import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  const user = session?.user;

  return (
    <>
      <h1>Profile of {user?.name}</h1>
      <h2>{user?.email}</h2>
      {user?.image && (
        <img src={user?.image} alt="avatar" width={200} height={200} />
      )}
    </>
  );
}
