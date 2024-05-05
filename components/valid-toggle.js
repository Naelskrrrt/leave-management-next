import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { toast } from "sonner";

const ValidToggleButton = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="" id="valid">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="p-2 border border-green-400 rounded-lg
            "
              onClick={() => {
                console.log("ato ay");
                toast("Validation d'un congé", {
                  description:
                    "Vous venez de valider le congés d'un utilisateur. Celui-ci receverra une confirmation par e-mail...",
                });
              }}
            >
              <Icon
                icon="lucide:file-check-2"
                color="#4ade80"
                width={22}
                height={22}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Valider le Congés (Confirmé)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="" id="reject">
        <Popover>
          <PopoverTrigger
            className="p-2 border border-red-400 rounded-lg"
            title="Rejeté le congé"
          >
            <Icon
              icon="lucide:file-x-2"
              color="#F87171"
              width={22}
              height={22}
            />
          </PopoverTrigger>
          <PopoverContent className="border p-3 m-2 bg-slate-800/50 backdrop-blur-sm z-50 w-48">
            <p className="text-sm font-semibold">
              Vous-etes sur de vouloir rejeté le congé ?
            </p>
            <Button
              onClick={() => {
                console.log("ato ay");
                toast("Rejet d'un congé", {
                  description:
                    "Vous venez de Rejeter le congés d'un utilisateur. Celui-ci receverra une confirmation par e-mail...",
                });
              }}
              className="mt-2 bg-red-500 text-white font-semibold hover:bg-red-400"
            >
              <span>Oui</span>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ValidToggleButton;
