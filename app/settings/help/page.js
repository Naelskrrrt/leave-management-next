"use client";

import helpImage from "@/assets/help-image.png";
import { HelpBentoGrid } from "@/components/help-bento-grid";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRef } from "react";

const Help = () => {
  const container = useRef(null);
  return (
    <>
      <section
        id="home"
        className="w-full   flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
      >
        <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            C est quoi E-LEAVE ?
          </p>
          <h1 className="mt-10 font-grotesc text-8xl text-[50px] max-sm:leading-[82] font-bold">
            <span className="whitespace-nowrap relative z-10 pr-10">
              Une plateforme de
            </span>
            <br />
            <span className="text-blue-500 inline-block mt-3 pr-4">
              Gestion Congés
            </span>
          </h1>
          <p className="font-grotesc text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Conçue pour faciliter la parcours de demande de congés au sein d une
            entreprise, en l optimisant.
          </p>
          <Button className="flex gap-3">
            En Savoir Plus <Icon icon="lucide:move-up-right" width={20} />
          </Button>
        </div>
        <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40  relative ">
          <Image
            src={helpImage}
            alt="Shoe Collection"
            width={510}
            height={400}
            className="object-contain relative z-10"
          />
        </div>
      </section>
      <HelpBentoGrid />
    </>
  );
};

export default Help;
