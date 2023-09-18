import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface UserData {
  id: string | undefined;
  objectId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
}
async function Page() {
  const user = await currentUser();
  const userId = user?.id;
  const userInfo = await fetchUser(userId ? userId : "");
  const userData: UserData = {
    id: user?.id,
    objectId: userInfo?._id || "",
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
        <Link href="/">No thanks</Link>
      </section>
    </main>
  );
}
export default Page;
