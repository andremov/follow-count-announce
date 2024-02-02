import Link from "next/link";

export default async function Home() {
  const { instagramClientId, instagramRedirectUri } = process.env;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Link
        href={`https://api.instagram.com/oauth/authorize?client_id=${instagramClientId}&redirect_uri=${instagramRedirectUri}&scope=user_profile,user_media&response_type=code`}
      >
        Log in
      </Link>
    </main>
  );
}
