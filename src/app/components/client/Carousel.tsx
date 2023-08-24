"use client";
import Image from "next/image";
import { useState } from "react";
import { CarouselDataObject} from "../server/CarouselData";
import { title } from "@/app/fonts";
import Link from "next/link";

interface CarouselData{
    carouselDataList:CarouselDataObject[]
}

const Carousel= ({carouselDataList}:CarouselData) =>{
  const [current, setCurrent] = useState(0);
  return (
    <>
      <main className="w-full h-full relative flex items-center justify-center">
        <div className="h-full w-full overflow-hidden rounded-xl relative">
          <div
            className="h-full flex transition-all ease-linear duration-300"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {carouselDataList.map((dataObject:CarouselDataObject) => (
              <div
                key={dataObject.index}
                className={`h-full w-full flex-shrink-0 relative`}
              >
                <Image
                  src={dataObject.image}
                  layout="fill"
                  objectFit="cover"
                  alt="Carousel_Image"
                  className="z-0"
                />
                <div className="absolute bg-[#00000050] w-full h-full text-white flex flex-col justify-center px-[10%] gap-10">
                  <div className="flex flex-col gap-5 w-[50%] max-md:w-[100%] ">
                    <h1 className={`text-4xl font-semibold ${title.className}`}>{dataObject?.title}</h1>
                    <p className="text-sm">{dataObject?.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-5 w-[50%] max-md:w-[100%]">
                  <Link href={"/"} className="flex-1">
                    <button className="bg-[#00000080] border-2 border-white rounded-lg p-2 flex-1 shadow-md hover:bg-[#000000] hover:transition-all duration-200 w-full">
                      Download & Play
                    </button>
                  </Link>
                    <Link href={dataObject.getStats} className="flex-1">
                      <button className="bg-[#00000080] border-2 border-white rounded-lg p-2 flex-1 shadow-md hover:transition-all hover:bg-[#000000] duration-200 w-full">
                        Get Stats
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className={`absolute text-8xl left-2 z-50 text-[#ffffff80] hover:text-white animate-pulse hover:animate-none  ${
            current === 0 && "hidden"
          }`}
        >
          &#8249;
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => Math.min(prev + 1, carouselDataList.length - 1))
          }
          className={`absolute text-8xl right-2 z-50 text-[#ffffff80] hover:text-white animate-pulse hover:animate-none ${
            current >= carouselDataList.length - 1 && "hidden"
          }`}
        >
          &#8250;
        </button>
      </main>
      <div className="self-center flex gap-5 w-full items-center justify-center pt-2 px-52 max-md:px-20">
        {carouselDataList.map((dataObject:CarouselDataObject) => (
          <div
            key={dataObject.index}
            className={`h-1 flex-1 rounded-full transition-all ${
              current == dataObject?.index ? "bg-[#000000]" : "bg-[#00000050]"
            } `}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
