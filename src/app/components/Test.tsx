"use client";
import { title } from "@/app/fonts";
import {BsFillCaretLeftFill,BsFillCaretRightFill} from "react-icons/bs"
import Button from "@/app/components/server/ReusableComponents/Button";
import { useState } from "react";
import SubStatsCard from "@/app/components/server/ReusableComponents/SubStatsCard";

const Test = ({ params }: any) => {
    const [date, setDate] = useState(1);
    // const GameTitle = params?.id?.replace(/_/g, ' ');
    const randomStuff = [{type:"Score",done:"60",target:"100"},{type:"Steps",done:"600",target:"1000"},{type:"Speed",done:"30",target:"100"},{type:"Calories",done:"80",target:"100"},{type:"Shots",done:"30",target:"100"}]
    return (
      <main className="flex flex-col py-7 px-5 h-screen overflow-hidden gap-5 w-full">
        <section className={`text-3xl font-semibold ${title.className}`}>
          {/* {GameTitle.toUpperCase()} */}
        </section>
        <section className="lg:w-[70%] w-full flex gap-2 overflow-x-auto min-h-[40px]">
          <Button name="Daily" active={true} />
          <Button name="Weekly" />
          <Button name="Monthly" />
        </section>
        <section className={`flex flex-col border-2 border-black rounded-xl shadow-lg overflow-hidden mt-4 h-full w-full`}>
          <div className="flex relative min-h-[75px] bg-[#ADD2B5] border-b-2 border-black items-center px-5 overflow-x-auto">
            <div className="font-medium text-lg flex items-center gap-5">
              <BsFillCaretLeftFill
                onClick={() => setDate((prev) => prev - 1)}
                className={`cursor-pointer flex ${date === -1 && 'invisible'}`}
              />
              {date === 0 && 'Yesterday'}
              {date === 1 && 'Today'}
              {date === -1 && 'Day Before'}
              <BsFillCaretRightFill
                onClick={() => setDate((prev) => prev + 1)}
                className={`cursor-pointer flex ${date === 1 && 'invisible'}`}
              />
            </div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 p-3 lg:grid-cols-4 gap-4 w-full overflow-y-auto">
            {randomStuff.map((e: any, i: any) => (
                <SubStatsCard key={i} type={e.type} name={e.type} done={e.done} target={e.target}  />
            ))}
          </div>
        </section>
      </main>
    );
  };
  
export default Test;