"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { findUser } from "~/api";
import { useFollowStore } from "~/store/followStore";

export default function LoadSearchParamCode() {
  const { instagramClientId, instagramClientSecret } = process.env;
  const { setAuthCode } = useFollowStore();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code && instagramClientId && instagramClientSecret) {
      console.log({ code });

      void findUser(code, instagramClientId, instagramClientSecret);
    }

    setAuthCode(code ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, instagramClientId, instagramClientSecret]);

  return <div></div>;
}
