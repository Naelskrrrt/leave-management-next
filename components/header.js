"use client";

import React, { useDebugValue } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoIcon from "@/assets/logo.png";
import ModeToggle from "./dark-light-toggle";
const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all `, {
        "border-b border-gray-200 bg-white/75 dark:bg-slate-800/70 dark:border-slate-900/75 backdrop-blur-lg":
          scrolled,
      })}
    >
      <div className="flex h-[75px] items-center justify-between px-5 py-3">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
            <span className="text-2xl font-bold hidden">Cong-e</span>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ModeToggle />
          <Link href="/settings/account">
            <div className="flex items-center gap-3 bg-blue-500 p-2 pr-3 rounded-[3ch] text-white cursor-pointer m-2">
              {/* <Image src={} width={30} height={30} className="rounded-full object-cover" /> */}
              <span className="w-[30px] h-[30px] rounded-full bg-blue-400 flex items-center justify-center p-1">
                JO
              </span>
              <span>Johnny</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className='icons'>
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='notifications.svg' alt='' />
          <span>1</span>
        </div>
        <Link to="/user/1">
          <div className='user'>
            <img src='/homme.png' />
            <span>John</span>
          </div>
        </Link>
          <img src='/settings.svg' alt='' className='icon' />
      </div> */
}
