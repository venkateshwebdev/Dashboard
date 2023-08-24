"use client";
import Image from "next/image";
import { title } from "@/app/fonts";
import { useState } from "react";
import { BiMenu, BiSolidHome } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { IoLogOut, IoCloseSharp } from "react-icons/io5";
import NavbarButton from "../server/ReusableComponents/NavbarButton";
import Link from "next/link";
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
          <Link href={"/"}>

          <Image
            src="/img/NewMagnimusLogo.svg"
            alt="Magnimus_Logo"
            height={50}
            width={50}
          />
          </Link>

          <span className={`text-base font-bold pt-2 pb-20 ${title.className}`}>
            {menu ? "MAGNIMUS" : <span className="text-[#ADD2B5]">.</span>}
          </span>

          <div className={`flex flex-col gap-1 text-2xl w-full`}>
            <div onClick={()=>setMenu((prev)=>!prev)}>
              {!menu?<NavbarButton menu={menu} icon={<BiMenu />} name={""} />:<NavbarButton menu={menu} icon={<IoCloseSharp/>} name={"Close"} />}
            </div>
            <NavbarButton menu={menu} icon={<BiSolidHome />} name={"Home"} />
            <NavbarButton menu={menu} icon={<FaUserEdit />} name={"Edit Profile"} />
          </div>
        </section>

        {/* ////Sidebar Bottom */}
        <section className="">
          <div className="flex flex-col">
            <NavbarButton menu={menu} icon={<IoLogOut />} name={"Logout"} />
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
          <span className={`text-base font-bold ${title.className}`}>MAGNIMUS</span>
        </div>
        <div onClick={(e)=>{e.stopPropagation();setMenu((prev)=>!prev)}}>
              {!menu?<NavbarButton icon={<BiMenu />} />:<NavbarButton icon={<IoCloseSharp/>} />}
        </div>
        {menu && (
          <div className="absolute bg-white flex flex-col rounded-xl shadow-md right-1 top-[60px] z-50 overflow-hidden w-fit ">
            <NavbarButton icon={<BiSolidHome />} name={"Home"} />
            <NavbarButton icon={<FaUserEdit />} name={"Edit Profile"} />
            <NavbarButton icon={<IoLogOut />} name={"Logout"} />
          </div>
        )}
      </main>
    </>
  );
}
