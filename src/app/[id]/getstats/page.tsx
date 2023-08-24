"use client";
import { title } from "@/app/fonts";
import {BsFillCaretLeftFill,BsFillCaretRightFill} from "react-icons/bs"
import Button from "@/app/components/server/ReusableComponents/Button";
import { useState } from "react";

const StatsInfo = ({params}:any) => {
    const GameTitle = params?.id?.replace(/_/g, ' ')
    const randomStuff = [1,2,3,4,5,6,7,8]
    const [date,setDate] = useState(0)
    return (
        <main className="flex flex-col h-screen px-[3%] py-[3%] w-screen gap-4">
        <section className={`text-3xl font-semibold ${title.className}`}>{GameTitle.toUpperCase()}</section>
        <section className="lg:w-[70%] w-full flex gap-2">
            <Button name="Daily" active={true} />
            <Button name="Weekly" />
            <Button name="Monthly" />
        </section>
        <section className="w-full h-full relative flex flex-col border-2 border-black rounded-xl shadow-lg overflow-hidden">
            {/* topNavbar */}
            <div className="flex relative h-[75px] bg-[#ADD2B5] w-full border-b-2 border-black items-center px-5">
                <div  className="font-medium text-lg flex items-center gap-5">
                    <BsFillCaretLeftFill onClick={()=>setDate(prev=>prev-1)} className={`cursor-pointer flex ${date===-1&&"invisible"}`} />
                     {date===0&&"Kaise Ho?"}
                     {date===1&&"How r u?"}
                     {date===-1&&"Namaskar"}
                     <BsFillCaretRightFill onClick={()=>setDate(prev=>prev+1)} className={`cursor-pointer flex ${date===1&&"invisible"}`} />
                </div>
            </div>

            {/* MainContainer */}
            <div className="grid grid-cols-4 gap-4 w-full h-full p-5 max-md:grid-cols-3 max-sm:grid-cols-2">
                {randomStuff.map((e:any)=><div className="w-full h-full bg-slate-400 rounded-lg shadow-lg flex items-center justify-center">Stats of {GameTitle} {date===0?"today":date===1?"yesterday":"Day Before"}</div>)}
            </div>
        </section>
        </main>
    );
}
 
export default StatsInfo;