"use client";

import CardContent from "@/components/card-content";
import { DataTableDemo } from "@/components/DataTable/data-table";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div
      className="grid w-full p-4 grid-cols-12 grid-rows-6 relative gap-4"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <CardContent
        value={90}
        title={"Congés en attente de validation..."}
        icon={"lucide:calendar-range"}
      />
      <CardContent
        value={109}
        title={"Congés Validé Et En cours"}
        icon={"lucide:calendar-check-2"}
      />

      <div className="col-span-6 border-slate-500 border row-span-4 p-3 rounded-lg">
        <h3 className="text-xl font-bold">Listes des demandes 👍</h3>
        <DataTableDemo columns={2} />
      </div>
      <div className="col-span-6 border-slate-500 border row-span-4 p-3 rounded-lg">
        HERE IS THE STATS
      </div>
      <div
        className="col-span-6 border-slate-500 border row-span-2 p-3 rounded-lg flex
      justify-center items-center gap-36"
      >
        <div className="border-4 border-blue-600 rounded-full">
          <Image
            src="/tempAvatar/img_avatar5.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="Your Profile"
            title="Admin profile"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-bold text-slate-200 mb-2">Bonjour,</p>
          <h1 className="text-2xl font-bold">Johnny Doe</h1>
          <p className="text-md text-slate-400">johnny@example.com</p>
          <div className="mt-4 w-[200px] flex ">
            <Link
              href="/settings/account"
              className="flex gap-3 items-center bg-blue-500 text-white py-2 px-3 rounded-lg "
              title="Modifier le profile de l'utilisateur"
            >
              <Icon
                icon="lucide:user-cog"
                width={22}
                height={22}
                color="#fff"
              />
              Modifier le profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
