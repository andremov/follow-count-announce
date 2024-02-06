"use client";

import Link from "next/link";
import { env } from "~/env";

export default function InstagramLogin() {
  const {
    NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
    NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
  } = env;

  return (
    <Link
      href={`https://api.instagram.com/oauth/authorize?client_id=${NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}&redirect_uri=${NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`}
    >
      Log in
    </Link>
  );
}
