"use client";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full h-24 shadow-xl ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href={"/"}>
          <h1 className="text-[36px]">Fake Restaurant</h1>
        </Link>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="border-red-600 ml-10 uppercase hover:border-b-2 cursor-pointer">
              Why us
            </li>
            <li className="border-red-600 ml-10 uppercase hover:border-b-2 cursor-pointer">
              services
            </li>
            <Link href={"/menu"}>
              <li className="border-red-600 ml-10 uppercase hover:border-b-2 cursor-pointer">
                Menu
              </li>
            </Link>
            <Link
              href={
                "https://www.google.com/maps/search/mixmax/@35.7654474,10.8146486,15z?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
            >
              <li className="border-red-600 mx-10 uppercase hover:border-b-2">
                Our locations
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed top-0 left-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 z-10"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <li className="py-4 cursor-pointer">WHY US</li>
            <li className="py-4 cursor-pointer">SERVICES</li>
            <li className="py-4 cursor-pointer">MENU</li>
            <li className=" py-4 cursor-pointer">
              <Link
                href={
                  "https://www.google.com/maps/search/mixmax/@35.7654474,10.8146486,15z?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
                }
                target="_blank"
              >
                OUR LOCATIONS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
