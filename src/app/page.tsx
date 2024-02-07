"use client";

import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";
// import InstagramLogin from "../components/instagram-login";
// import FollowerCount from "../components/follower-count";
import { useFollowStore } from "~/store/followStore";

export default function Home() {
  const [dueTime, setDueTime] = useState(
    Temporal.Now.instant().add({
      //  minutes: 1
      seconds: 10 + 2,
    }),
  );
  const [remaining, setRemaining] = useState({ minutes: "15", seconds: "00" });
  const [mode, setMode] = useState<"open" | "closed">("closed");

  useEffect(() => {
    console.log("created the interval");

    const interval = setInterval(() => {
      const { minutes, seconds } = Temporal.Now.instant().until(dueTime, {
        largestUnit: "minutes",
        smallestUnit: "seconds",
      });

      setRemaining({
        minutes:
          minutes < 0 ? "00" : minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds:
          seconds < 0 ? "00" : seconds < 10 ? `0${seconds}` : `${seconds}`,
      });
      console.log(seconds);

      if (seconds < -5) {
        const difference = mode === "closed" ? 5 : 10;
        setDueTime(Temporal.Now.instant().add({ seconds: difference + 2 }));
        setMode(mode === "closed" ? "open" : "closed");
      }
    }, 1000);
    return () => {
      console.log("cleared the interval");

      clearInterval(interval);
    };
  }, [dueTime]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-b ${mode === "open" ? "from-[#026d19]" : "from-[#6d0202]"} to-[#15162c] text-white`}
    >
      {/* <InstagramLogin / */}
      <div className="flex gap-3 text-[30rem] font-bold">
        {remaining.minutes.split("").map((num, index) => (
          <div
            className="min-w-[18vw] max-w-[18vw] rounded-xl bg-white text-center text-black"
            key={index}
          >
            {num}
          </div>
        ))}
        :
        {remaining.seconds.split("").map((num, index) => (
          <div
            className="min-w-[18vw] max-w-[18vw] rounded-xl bg-white text-center text-black"
            key={index}
          >
            {num}
          </div>
        ))}
      </div>
    </main>
  );
}
44;
