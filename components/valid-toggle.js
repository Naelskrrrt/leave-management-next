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

const ValidToggleButton = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="" id="valid">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="p-2 border border-green-400 rounded-lg">
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
        <TooltipProvider>
          <Popover>
            <Tooltip>
              <TooltipTrigger className="p-2 border border-red-400 rounded-lg">
                <Icon
                  icon="lucide:file-x-2"
                  color="#F87171"
                  width={22}
                  height={22}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Refuser le Congés (Rejeté)</p>
              </TooltipContent>
            </Tooltip>
          </Popover>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ValidToggleButton;
