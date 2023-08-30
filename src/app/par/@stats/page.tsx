"use client";
import { title } from "@/app/fonts";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Button from "@/app/components/server/ReusableComponents/Button";
import { useEffect, useState } from "react";
import GraphCards from "@/app/components/server/ReusableComponents/GraphCards";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const StatsInfo = ({ params }: any) => {
  const [date, setDate] = useState(1);
  const [statsCarousel, setStatsCarousel] = useState(false);
  const [tab,setTab] = useState(0)
  const GameTitle = params?.id?.replace(/_/g, " ");
  const router = useRouter()
  const pathname = usePathname()
  console.log(tab)
  console.log(pathname)
  console.log("params" , params)

  useEffect(()=>{
    const handleTabParam = () => {
        console.log(tab)
        const timeLine = ["daily","weekly","monthly"]
        router.push(pathname+`?tab=${timeLine[tab]}`+`&day=${"today"}`)
      }
      handleTabParam()
  },[tab])

  const randomStuff = [
    { type: "Score", done: "60", target: "100" },
    { type: "Shots", done: "80", target: "100" },
    { type: "Steps", done: "600", target: "1000" },
    { type: "Speed", done: "30", target: "100" },
    { type: "Calories", done: "80", target: "100" },
    { type: "Steps", done: "600", target: "1000" },
    { type: "Speed", done: "30", target: "100" },
    { type: "Calories", done: "80", target: "100" },
  ];
  const stuff = [
    { type: "Steps", done: "600", target: "1000" },
    { type: "Speed", done: "30", target: "100" },
    { type: "Calories", done: "80", target: "100" },
    { type: "Calories", done: "80", target: "100" },
    { type: "armit", done: "80", target: "100" },
  ];
  return (
    <main className="flex flex-col h-full overflow-hidden gap-5 w-full">
      <section className="lg:w-[70%] w-full flex gap-2 overflow-x-auto min-h-[40px]">
      <div className="flex-1 w-full shadow-lg"  onClick={()=>setTab(0)}>
        <Button name="Daily"    />
        </div>
        <div className="flex-1 w-full shadow-lg" onClick={()=>setTab(1)}>
        <Button name="Weekly"    />
        </div>
        <div className="flex-1 w-full shadow-lg" onClick={()=>setTab(2)}>
        <Button name="Monthly"    />
        </div>
      </section>

      <section
        className={`flex flex-col border-2 border-black relative rounded-xl shadow-lg overflow-hidden mt-4 h-full w-full`}
      >
        <div className="flex min-h-[75px] bg-[#ADD2B5] border-b-2 border-black items-center px-5 overflow-x-auto z-50 justify-between">
          <div className="font-medium text-lg flex items-center gap-5">
            <BsFillCaretLeftFill
              onClick={() => setDate((prev) => prev - 1)}
              className={`cursor-pointer flex ${date === -1 && "invisible"}`}
            />

            {date === 0 && "Yesterday"}
            {date === 1 && "Today"}
            {date === -1 && "Day Before"}

            <BsFillCaretRightFill
              onClick={() => setDate((prev) => prev + 1)}
              className={`cursor-pointer flex ${date === 1 && "invisible"}`}
            />
          </div>
          <div className="font-medium text-lg">
            {statsCarousel ? "Health Stats" : "Game Stats"}
          </div>
          <button onClick={()=>router.push(pathname+"/sessionwise")} className="font-medium text-lg border-2 border-black  p-2 rounded-lg shadow-md">
            Get Session wise
          </button>
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
                <GraphCards
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

export default StatsInfo;
