"use client";
import { title } from "@/app/fonts";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import SessionCard from "@/app/components/server/ReusableComponents/SessionCard";

const Sessions = ({ params }: any) => {
    const containerRef = useRef(null);
  const [statsCarousel, setStatsCarousel] = useState(false);
  const GameTitle = params?.id?.replace(/_/g, " ");
  const randomStuff = [
    { type: "Score", done: "60", target: "100" },
    { type: "Shots", done: "80", target: "100" },
    { type: "Steps", done: "600", target: "1000" },
    { type: "Speed", done: "30", target: "100" },
    { type: "Calories", done: "80", target: "100" },
    { type: "Steps", done: "600", target: "1000" },
  ];
  const stuff = [
    { type: "Steps", done: "600", target: "1000" },
    { type: "Speed", done: "30", target: "100" },
    { type: "Calories", done: "80", target: "100" },
    { type: "Duration", done: "90", target: "120" },
  ];
  return (
    <main className="flex flex-col py-7 px-5 h-screen overflow-hidden gap-5 w-full">

      <section className={`text-3xl font-semibold ${title.className}`}>
        {GameTitle?.toUpperCase()}
      </section>
      <section className="text-2xl font-semibold">Session wise Data</section>
      <section className={`flex flex-col border-2 border-black relative rounded-xl shadow-lg overflow-y-auto mt-4 h-full w-full`}>
      <div className="flex min-h-[75px] bg-[#ADD2B5] border-b-2 border-black items-center px-5 overflow-x-auto z-50 justify-between">Session          <div className="font-medium text-lg">
            {statsCarousel ? "Health Stats" : "Game Stats"}
          </div>
        </div>
        <button
          className={`absolute right-0 top-[50%] bg-[#87CEEB50] h-[50px] w-[50px] rounded-full z-50  animate-pulse ${
            statsCarousel && "hidden"
          }`}
          onClick={() => setStatsCarousel((prev) => !prev)}
        >
          {">"}
        </button>
        <button
          className={`absolute left-0 top-[50%] bg-[#87CEEB50] h-[50px] w-[50px] rounded-full z-50  animate-pulse ${
            !statsCarousel && "hidden"
          }`}
          onClick={() => setStatsCarousel((prev) => !prev)}
        >
          {"<"}
        </button>

        <div className="relative p-3  overflow-auto flex flex-col">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[100%] transition-all ease-linear duration-1000`}
          >
            {(statsCarousel ? randomStuff : stuff).map((e, i) => (
              <div key={i}>
                <SessionCard
                  charts={true}
                  type={e.type}
                  name={e.type}
                  done={e.done}
                  target={e.target}
                />
              </div>
            ))}
          </div>
          </div>
    </section>
    </main>
  );
};

export default Sessions;