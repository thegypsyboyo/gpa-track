import React from "react";
import Question from "@/components/forms/Question";
import { redirect } from "next/navigation";
import { getUserByID } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";

const page = async () => {
  const { userId } = auth();
  // const userId = "CL123456";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserByID({ userId });

  console.log(mongoUser);

  return (
    <div className="">
      <h1 className="h1-bold text-dark100_light900 mb-8">Ask a question</h1>
      <Question mongoUserId={JSON.stringify(mongoUser._id)} />
    </div>
  );
};

export default page;
