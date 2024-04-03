import CardContent from "@/components/card-content";
import { DataTableDemo } from "@/components/DataTable/data-table";

export default function Home() {
  return (
    <div
      className="grid w-full p-4 bg-black grid-cols-12 grid-rows-6 relative gap-4"
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
        <h3 className="text-xl font-bold">Liste de demandes 👍</h3>
        <DataTableDemo columns={2}/>
      </div>
      <div className="col-span-6 bg-red-500 row-span-4 p-3 rounded-lg">
        qlq chose
      </div>
      <div className="col-span-6 bg-red-500 row-span-2 p-3 rounded-lg">
        qlq chose
      </div>
    </div>
  );
}
