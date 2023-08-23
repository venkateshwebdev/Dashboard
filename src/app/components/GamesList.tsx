"use client"
import Image from "next/image";
import image1 from "/img/jungle (1).png";
import image2 from "/img/jungle (1).png";
import image3 from "/img/jungle (1).png";
import { useState } from "react";
import "./carousel.css"
import Carousel from "./Carousel";
export default function GamesList(){
    return(
      <main className="flex flex-col h-screen p-[3%] w-screen gap-4">
        <section className="text-3xl font-semibold">Games Available</section>
            <Carousel />
      </main> 
    )
}