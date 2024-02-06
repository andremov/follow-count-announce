"use client";

import { useEffect } from "react";
import { useFollowStore } from "~/store/followStore";
import { getUserNode } from "~/api";

export default function LiveFollowerPage() {
  const { longLivedToken, userID } = useFollowStore();

  async function callRequestUserNode() {
    const data = await getUserNode(userID!, longLivedToken!);
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"></main>
  );
}
