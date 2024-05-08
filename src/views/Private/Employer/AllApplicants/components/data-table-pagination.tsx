import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  meta?: any;
  reduxStateForPage?: any;
  reduxStateForLimit?: any;
}

export function DataTablePagination<TData>({
  table,
  meta,
  reduxStateForPage,
  reduxStateForLimit,
}: DataTablePaginationProps<TData>) {
  const { page: statePage, limit: stateLimit } = useAppSelector(
    (state) => state.job.allApplicantsTable
  );
  const { page, limit, total, totalPage } = meta || {};

  console.log(totalPage);

  const paginationItems = Array.from({ length: totalPage }, (_, i) => i + 1);

  console.log(paginationItems);

  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of {total} row(s)
        selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={stateLimit.toString()}
            onValueChange={(value) => {
              dispatch(reduxStateForLimit(Number(value)));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {totalPage}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => dispatch(reduxStateForPage(Number(1)))}
            disabled={statePage == 1}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => dispatch(reduxStateForPage(Number(statePage - 1)))}
            disabled={statePage == 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          {paginationItems?.map((item, index) => (
            <Button
              key={item}
              variant={`${item === statePage ? "default" : "outline"}`}
              className="h-8 w-8 p-0"
              onClick={() => dispatch(reduxStateForPage(Number(item)))}
              disabled={
                (statePage === 1 && index === 0) ||
                (statePage === totalPage &&
                  index === paginationItems.length - 1)
              }
            >
              {item}
            </Button>
          ))}

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => dispatch(reduxStateForPage(Number(statePage + 1)))}
            disabled={statePage === totalPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => dispatch(reduxStateForPage(Number(totalPage)))}
            disabled={statePage === totalPage}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
