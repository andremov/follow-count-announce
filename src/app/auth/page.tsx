import { Suspense } from "react";
import LoadSearchParamCode from "../../components/load-search-param-code";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Suspense>
        <LoadSearchParamCode />
      </Suspense>
    </main>
  );
}
