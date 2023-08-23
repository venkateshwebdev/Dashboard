"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiSolidHome } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { IoLogOut, IoCloseSharp } from "react-icons/io5";
export default function Sidebar() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      {/* //////////SideBar */}
      <main
        className={`h-[100vh] w-[100px] bg-[#ADD2B5] flex flex-col justify-between items-center py-5 transition-all flex-shrink-0 max-sm:hidden ${
          menu && "w-[200px]"
        }`}
      >
        {/* ////SideBar Top */}
        <section className="flex flex-col items-center flex-shrink-0 min:w-full">
          <Image
            src="/img/NewMagnimusLogo.svg"
            alt="Magnimus_Logo"
            height={50}
            width={50}
          />
          <span className="text-base font-bold pt-2 pb-20">
            {menu ? "MAGNIMUS" : <span className="text-[#ADD2B5]">.</span>}
          </span>
          <div className={`pb-20 flex flex-col gap-10 text-2xl items-start`}>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
            >
              {menu ? (
                <div className="flex gap-2">
                  <IoCloseSharp />
                  <span className="text-base">Close</span>
                </div>
              ) : (
                <BiMenu />
              )}
            </div>
            <div className="flex gap-2 cursor-pointer">
              <BiSolidHome />
              {menu && <span className="text-base">Home</span>}
            </div>
            <div className="flex gap-2 cursor-pointer">
              <FaUserEdit />
              {menu && <span className="text-base">Edit Profile</span>}
            </div>
          </div>
        </section>

        {/* ////Sidebar Bottom */}
        <section className="">
          <div className="flex flex-col gap-10 text-2xl">
            <div className="flex gap-2 cursor-pointer">
              <IoLogOut />
              {menu && <span className="text-base">Logout</span>}
            </div>
          </div>
        </section>
      </main>


      {/* /////Top Navbar */}
      <main className=" h-[100px] w-[100vw] bg-[#ADD2B5] hidden items-center justify-between max-sm:flex top-0 px-5 relative" onClick={()=>setMenu(false)}>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/img/NewMagnimusLogo.svg"
            alt="Magnimus_Logo"
            height={50}
            width={50}
          />
          <span className="text-base font-bold">MAGNIMUS</span>
        </div>
        <div
          className="flex gap-2 cursor-pointer text-2xl"
          onClick={(e) => {e.stopPropagation();setMenu((prev) => !prev);}}
        >
          {menu ? <IoCloseSharp /> : <BiMenu />}
        </div>
        {menu && (
          <div className="absolute bg-white flex flex-col rounded-xl shadow-md right-1 top-[60px] z-50 overflow-hidden">
            <div className="flex gap-2 items-center cursor-pointer hover:bg-[#00000020] p-3">
              <BiSolidHome />
              <span className="text-base">Home</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer hover:bg-[#00000020] p-3">
              <FaUserEdit />
              <span className="text-base">Edit Profile</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-[#00000020] p-3">
              <IoLogOut />
              <span className="text-base">Logout</span>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
