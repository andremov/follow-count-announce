"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { findUser } from "~/api";
import { useFollowStore } from "~/store/followStore";

export default function LoadSearchParamCode() {
  const { setAuthCode } = useFollowStore();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log({ code });

      void findUser(code);
    }

    setAuthCode(code ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return <div></div>;
}
