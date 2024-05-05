"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import * as React from "react";
// import avatarImage from "@/assets/tempAvatar/img_avatar2.png";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import ValidToggleButton from "../valid-toggle";

const data = [
  {
    id: "m5gr84i9",
    imageURL: "",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    imageURL: "/tempAvatar/img_avatar2.png",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    imageURL: "/tempAvatar/img_avatar3.png",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    imageURL: "/tempAvatar/img_avatar4.png",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    imageURL: "/tempAvatar/img_avatar5.png",
    email: "carmella@hotmail.com",
  },
];

// export typePayment = {
//   id: string
//   amount: number
//   imageURL: "pending" | "processing" | "success" | "failed"
//   email: string
// }
const Avatar = ({ imageURL, email }) => {
  // Vérifier si l'image existe
  const hasImage = !!imageURL;

  // Si l'image existe, afficher l'image, sinon afficher les deux premières lettres de l'email en majuscules
  return (
    <div className="flex items-center justify-center">
      {hasImage ? (
        <Image
          src={imageURL}
          width={50}
          height={50}
          className="rounded-full"
          alt="Avatar"
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white font-semibold text-lg">
          {email.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export const columns = [
  {
    accessorKey: "imageURL",
    header: "Avatar",
    cell: ({ row }) => (
      <Avatar
        imageURL={row.getValue("imageURL")}
        email={row.getValue("email")}
      />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <ValidToggleButton />;
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  // const [rowSelection, setRowSelection] = React.useState({});
  let [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 2,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel({}),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 w-full">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-full"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
