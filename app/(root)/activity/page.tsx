import React from "react";
import { currentUser } from "@clerk/nextjs";
import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const activity: any = await getActivity(userInfo._id);
  console.log(activity);
  return (
    <section>
      <h1 className="head-text mb-10">Activity</h1>
      <section className="flex mt-10 flex-col gap-5">
        {activity.length > 0 ? (
          activity.map((item:any) => (
            <Link key={activity._id} href={`thread/${item._id}`}>
              <article className="activity-card">
                <div className="relative w-14 h-14">
                  <Image
                    fill={true}
                    className="rounded-full object-cover"
                    src={item.author.image}
                    alt="author_image"
                  />
                </div>
                <p className="!text-base-regular text-light-1">
                  <span className="mr-1 text-primary-500">
                    {item.author.name}
                  </span>{" "}
                  replied to your thread
                </p>
              </article>
            </Link>
          ))
        ) : (
          <p className="!text-base-regular text-light-3">No activity yet</p>
        )}
      </section>
    </section>
  );
};

export default Page;
