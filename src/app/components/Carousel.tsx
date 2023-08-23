"use client";

import { useState } from "react";

const Carousel = () => {
    const images = ["https://images.unsplash.com/photo-1692614767739-9f15da426792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1687763678474-57c0bb515b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"] 
    const [current,setCurrent] = useState(0)
    return (
        <div className="w-full h-full relative flex items-center justify center">
        <main className="h-full w-full overflow-hidden rounded-xl flex relative">
            <img src={images?.[1]} className={`h-full w-full absolute top-0 left-full transition-all ease-linear duration-300 ${current==0?"ml-0":"ml-[-100%]"}`} />
            <img src={images?.[0]} className={`h-full w-full absolute top-0 left-full transition-all ease-linear duration-300 ${current==0?"ml-[-100%]":"ml-0"}`} />
        </main>
        <button onClick={()=>setCurrent(0)} className="absolute text-8xl font-bold top-[50%] left-0 ">&#8249;</button>
        <button onClick={()=>setCurrent(1)} className="absolute text-8xl font-bold top-[50%] right-0">&#8250;</button>
        </div>

    );
}
 
export default Carousel;