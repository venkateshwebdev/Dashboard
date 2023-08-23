import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const images = [
    {
      index: 0,
      title: "Jungle Run",
      image:
        "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      index: 1,
      title: "Vital Mornings",
      image:
        "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      index: 2,
      title: "The BoogeyMan",
      image:
        "https://images.unsplash.com/photo-1621274283140-e4450435a76a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    },
  ];
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
            {images.map((e) => (
              <div
                key={e.index}
                className={`h-full w-full flex-shrink-0 relative`}
              >
                <Image
                  src={e.image}
                  layout="fill"
                  objectFit="cover"
                  alt="Carousel_Image"
                  className="z-0"
                />
                <div className="absolute bg-[#00000050] w-full h-full text-white flex flex-col justify-center px-[10%] gap-10">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-semibold">{e?.title}</h1>
                    <p className="text-xs w-[50%] max-sm:w-[70%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 w-[50%]">
                    <button className="bg-[#00000080] border-2 border-white rounded-lg p-2 flex-1 shadow-md hover:bg-[#000000] hover:transition-all duration-200">
                      Download & Play
                    </button>
                    <button className="bg-[#00000080] border-2 border-white rounded-lg p-2 flex-1 shadow-md hover:transition-all hover:bg-[#000000] duration-200">
                      Get Stats
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className={`absolute text-8xl top-[50%] left-2 z-50 text-white animate-pulse hover:animate-none  ${
            current === 0 && "hidden"
          }`}
        >
          &#8249;
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => Math.min(prev + 1, images.length - 1))
          }
          className={`absolute text-8xl top-[50%] right-2 z-50 text-white animate-pulse hover:animate-none ${
            current >= images.length - 1 && "hidden"
          }`}
        >
          &#8250;
        </button>
      </main>
      <div className="self-center flex gap-5 w-full items-center justify-center pt-2">
        {images.map((e, i) => (
          <div
            key={i}
            className={`h-2 w-[100px] rounded-full transition-all ${
              current == i ? "bg-[#00000095]" : "bg-[#00000050]"
            } `}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
