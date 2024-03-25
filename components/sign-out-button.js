import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const SignOutButton = () => {
  return (
    <Popover>
      <PopoverTrigger className="flex gap-3 justify-between bg-blue-600 py-3 pl-5 pr-4 rounded-[3ch] text-white items-center cursor-pointer m-6">
        {/* <Link
          href={"/"}
          className="flex gap-3 justify-between bg-blue-600 py-3 pl-5 pr-4 rounded-[3ch] text-white items-center cursor-pointer m-6"
        > */}
        <span>Me Deconnecter</span>
        <span className="flex justify-center items-center p-3 bg-blue-500 rounded-full">
          <Icon icon="solar:logout-2-broken" width={20} height={20} />
        </span>
        {/* </Link> */}
      </PopoverTrigger>
      <PopoverContent>
        <h1 className="text-xl mb-3">Se Deconnecter</h1>
        <p className="my-4">Etes vous sur de vouloir nous quitter ?</p>
        <Button variant="destructive" className="flex gap-3">
          <span>Oui</span>
          <Icon icon="solar:logout-2-broken" width={20} height={20} />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default SignOutButton;
