// @ts-ignore

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta?: any;
  filterData?: any;
  stateData?: any;
  isRowNavigate?: boolean;
  rowNavigateUrl?: string;
  reduxStateForPage?: any;
  reduxStateForLimit?: any;
  reduxStateForFilter?: any;
  reduxStateForSearchTerm?: any;
}

export function DataTable<TData, TValue>({
  data,
  meta,
  columns,
  stateData,
  filterData,
  isRowNavigate,
  rowNavigateUrl,
  reduxStateForPage,
  reduxStateForLimit,
  reduxStateForFilter,
  reduxStateForSearchTerm,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        stateData={stateData}
        filterData={filterData}
        reduxStateForFilter={reduxStateForFilter}
        reduxStateForSearchTerm={reduxStateForSearchTerm}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-primary-gray/15">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
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
            {data?.length ? (
              table.getRowModel().rows.map((row) => {
                const originalData = row.original as { slug: string };
                return (
                  <TableRow
                    onClick={() =>
                      isRowNavigate &&
                      navigate(`/${rowNavigateUrl}/${originalData.slug}`)
                    }
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${isRowNavigate ? "cursor-pointer" : ""}`}
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
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination
        table={table}
        meta={meta}
        reduxStateForPage={reduxStateForPage}
        reduxStateForLimit={reduxStateForLimit}
      />
    </div>
  );
}
