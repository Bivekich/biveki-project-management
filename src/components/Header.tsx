import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="logo">
          BivekiTeam
        </Link>
        <div>
          {session && (
            <>
              {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              Не вошел в систему
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
