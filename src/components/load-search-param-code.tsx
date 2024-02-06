"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getUserAccessToken } from "~/api";
import { useFollowStore } from "~/store/followStore";
import { env } from "~/env";

export default function LoadSearchParamCode() {
  const {
    NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
    NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
    NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
  } = env;

  const { setShortLivedToken, setLongLivedToken, setUserID } = useFollowStore();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    async function doFetchUserToken() {
      if (code) {
        const { access_token, user_id } = await getUserAccessToken(
          code,
          NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
          NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
          NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
        );
        setLongLivedToken(access_token);
        setUserID(user_id);
        redirect("/live-followers");
      }
    }

    void doFetchUserToken();

    setShortLivedToken(code ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return <div></div>;
}
