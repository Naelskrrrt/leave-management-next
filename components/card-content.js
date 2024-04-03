"use client"

import { Icon } from "@iconify/react";
import React from "react";

const CardContent = ({icon, title, value}) => {
  return (
    <div className="col-span-3 border-slate-500 border row-span-2 p-3 rounded-lg">
    <div className="flex p-1 ">
      <div className="flex flex-col">
        <Icon icon={icon} width="50" height="50"/>
        <h2 className="text-md font-extrabold py-4">{title}</h2>
      </div>
      <div className="w-[50%]  flex align-center self-center justify-center border rounded-md mx-2 bg-slate-500 ">
        <span className="text-4xl font-bold py-11 px-5 ">{value}</span>
      </div>
    </div>
    </div>
  );
};

export default CardContent;
