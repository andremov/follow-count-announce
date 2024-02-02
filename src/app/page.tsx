"use client";

import { useSearchParams } from "next/navigation";
import InstagramLogin from "./_components/instagram-login";
import FollowerCount from "./_components/follower-count";
import { useEffect } from "react";
import { findUser } from "~/api";

export default function Home() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      void findUser(code);
    }
  }, [code]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {!code && <InstagramLogin />}
      {code && <FollowerCount />}
    </main>
  );
}
