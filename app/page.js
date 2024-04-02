import Image from "next/image";

export default function Home() {
  return <div className="grid w-full p-4 bg-black grid-cols-12 grid-rows-6 relative gap-4" 
              style={{
              height: "calc(100vh - 100px)"
        }}>
    <div className="col-span-3 bg-red-500 row-span-2 p-3 rounded-lg">
        qlq chose
    </div>
    <div className="col-span-3 bg-red-500 row-span-2 p-3 rounded-lg">
        qlq chose
    </div>
    <div className="col-span-6 bg-red-500 row-span-4 p-3 rounded-lg">
        qlq chose
    </div>
    <div className="col-span-6 bg-red-500 row-span-4 p-3 rounded-lg">
        qlq chose
    </div>
    <div className="col-span-6 bg-red-500 row-span-2 p-3 rounded-lg">
        qlq chose
    </div>

  </div>;
}
