"use client";

import InstagramLogin from "./_components/instagram-login";
import FollowerCount from "./_components/follower-count";
import { useFollowStore } from "~/store/followStore";

export default function Home() {
  const { authCode, authCodeResolved } = useFollowStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <InstagramLogin />
      {/* {authCode && authCodeResolved && <FollowerCount />} */}
    </main>
  );
}
44;
