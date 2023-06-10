import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Prifile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img src={session.user.image} alt={session.user.name as string} />
      )}
    </div>
  );
}
