"use client";

import Link from "next/link";

export default function InstagramLogin() {
  const { instagramClientId, instagramRedirectUri } = process.env;

  return (
    <Link
      href={`https://api.instagram.com/oauth/authorize?client_id=${instagramClientId}&redirect_uri=${instagramRedirectUri}&scope=user_profile,user_media&response_type=code`}
    >
      Log in
    </Link>
  );
}
