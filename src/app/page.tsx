"use client";

import { useSearchParams } from "next/navigation";
import InstagramLogin from "./_components/instagram-login";
import FollowerCount from "./_components/follower-count";
import { Suspense, useEffect } from "react";
import { findUser } from "~/api";
import LoadSearchParamCode from "./_components/load-search-param-code";
import { useFollowStore } from "~/store/followStore";

export default function Home() {
  const { authCode, authCodeResolved } = useFollowStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Suspense>
        <LoadSearchParamCode />
      </Suspense>
      {!authCode && authCodeResolved && <InstagramLogin />}
      {authCode && authCodeResolved && <FollowerCount />}
    </main>
  );
}
44;
