import { Cross2Icon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./data-table-view-options";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearAllApplicantTableFilter } from "@/redux/features/job/jobSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterData?: any;
  reduxStateForFilter?: any;
  reduxStateForSearchTerm?: any;
}

export function DataTableToolbar<TData>({
  table,
  filterData,
  reduxStateForFilter,
  reduxStateForSearchTerm,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const { searchTerm, filter } = useAppSelector(
    (state) => state.job.allApplicantsTable
  );

  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search ..."
          value={searchTerm}
          onChange={(event) =>
            dispatch(reduxStateForSearchTerm(event.target.value))
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 !ring-0 !ring-offset-0 !outline-none">
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="max-w-lg p-3 grid grid-cols-2 gap-3 z-0"
          >
            {filterData?.map(
              (filterItem: any, index: number) =>
                table.getColumn(filterItem?.value) && (
                  <DataTableFacetedFilter
                    key={index}
                    column={table.getColumn(filterItem?.value)}
                    filterValue={filterItem?.value}
                    title={filterItem?.label}
                    options={filterItem?.options}
                    reduxStateForFilter={reduxStateForFilter}
                  />
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* {filterData?.map(
          (filterItem: any, index: number) =>
            table.getColumn(filterItem?.value) && (
              <DataTableFacetedFilter
                key={index}
                column={table.getColumn(filterItem?.value)}
                filterValue={filterItem?.value}
                title={filterItem?.label}
                options={filterItem?.options}
                reduxStateForFilter={reduxStateForFilter}
              />
            )
        )} */}
        {(filter?.length > 0 || searchTerm) && (
          <Button
            variant="ghost"
            onClick={() => dispatch(clearAllApplicantTableFilter())}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
