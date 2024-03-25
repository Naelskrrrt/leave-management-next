import { ReactNode } from "react";

export default function MarginWidthWrapper({ children }) {
  return (
    <div className="flex flex-col ml-[300px] sm:border-r sm:border-zinc-700 min-h-screen">
      {children}
    </div>
  );
}
