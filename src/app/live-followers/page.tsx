"use client";

import { useEffect, useState } from "react";
import { useFollowStore } from "~/store/followStore";
import { getUserNode } from "~/api";

export default function LiveFollowerPage() {
  const { longLivedToken, userID } = useFollowStore();
  const [followers, setFollowers] = useState(0);

  async function callRequestUserNode() {
    const data = await getUserNode(userID!, longLivedToken!);
    setFollowers(data.followers_count);
    console.log(data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      void callRequestUserNode();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>{followers}</div>
    </main>
  );
}
