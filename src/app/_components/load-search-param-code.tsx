"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { findUser } from "~/api";
import { useFollowStore } from "~/store/followStore";
import { env } from "~/env";

export default function LoadSearchParamCode() {
  const {
    NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
    NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
    NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
  } = env;

  const { setAuthCode } = useFollowStore();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    console.log({
      code,
    });

    if (code) {
      console.log({ code });

      // void findUser(
      //   code,
      //   NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
      //   NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
      //   NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
      // );
    }

    setAuthCode(code ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return <div></div>;
}
