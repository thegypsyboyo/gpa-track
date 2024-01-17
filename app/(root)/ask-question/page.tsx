import React from "react";
import Question from "@/components/forms/Question";
// import { auth } from "@clerk/nextjs";

// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserByID } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";

const page = async () => {
  const { userId } = auth();
  // const userId = "";

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
