import {
  useDeleteJobMutation,
  useGetMyAllJobsQuery,
} from "@/redux/features/job/jobApi";
import Loading from "@/components/shared/Loading";
import { useAppSelector, useDebounced } from "@/redux/hooks";
import { mergeFilters } from "@/utils/margeFilters";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Job, config } from "./MangeJobs.config";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import DashboardBreadcrumb from "@/components/shared/DashboardBreadcrumb";
import { DataTable } from "@/components/ui/data-table/data-table";
import {
  setAllApplicantFilter,
  setAllApplicantLimit,
  setAllApplicantPage,
  setAllApplicantSearchTerm,
} from "@/redux/features/job/jobSlice";
import CountDown from "./CountDown";
import AlertModal from "@/components/ui/alert-modal";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ManageJobs = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>("");

  const [deleteJob] = useDeleteJobMutation();

  const jobTableStateData = useAppSelector(
    (state) => state.job.allApplicantsTable
  );

  const { filter, searchTerm, limit, page } = jobTableStateData || {};

  const mergedFilters = mergeFilters(filter);

  const query: Record<string, any> = {};

  const [sort, setSort] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  query["limit"] = limit;
  query["page"] = page;
  query["sort"] = sortBy + sort;

  Object.entries(mergedFilters).forEach(([name, value]) => {
    if (typeof value === "string") {
      query[name] = value.includes(",") ? value.split(",") : value;
    } else {
      query[name] = value;
    }
  });

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading, isError } = useGetMyAllJobsQuery({ ...query });

  const { data: jobData, meta } = data?.data || {};

  // For Table sort
  const handleSort = (sortFieldName: string, sortFieldBy: string) => {
    setSort(sortFieldName);
    setSortBy(sortFieldBy);
  };

  // For Table action button
  const handleAction = (value: string, rowId: string) => {
    switch (value) {
      case "delete":
        setOpenModal(true);
        setJobId(rowId);
        break;

      default:
        break;
    }
  };

  const deleteJobHandler = async () => {
    try {
      const res = await deleteJob({ id: jobId });
      if (res) {
        toast.success("Deleted successfully");
        setOpenModal(false);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const columns: ColumnDef<Job>[] = [
    {
      id: "_id",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          onClick={(e) => e.stopPropagation()}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      enableSorting: true,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Title"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("title")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      enableSorting: true,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Category"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium capitalize">
              {row.getValue("category")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "salary",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Salary"
            onChange={handleSort}
          />
        );
      },

      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("salary")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Type"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        let displayLabel;

        if (row.getValue("type") === "partTime") {
          displayLabel = "Part Time";
        } else if (row.getValue("type") === "fullTime") {
          displayLabel = "Full Time";
        } else {
          displayLabel = row.getValue("type");
        }

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium capitalize">
              {displayLabel as string}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "location",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Location" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium capitalize">
              {row.getValue("location")}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "isUrgent",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Urgent"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <p className="max-w-[500px] truncate font-medium capitalize">
              {row.getValue("isUrgent") ? (
                <span className="bg-secondary-orange text-primary-orange rounded-full px-3 py-1 text-xs tracking-wide">
                  {" "}
                  Urgent{" "}
                </span>
              ) : null}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Status"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <p className="max-w-[500px] truncate font-medium capitalize">
              {row.getValue("status") === "active" ? (
                <span className="bg-secondary-green text-primary-green rounded-full px-3 py-1 text-xs tracking-wide">
                  Active
                </span>
              ) : (
                <span className="bg-secondary-blue text-primary-blue rounded-full px-3 py-1 text-xs tracking-wide">
                  Close
                </span>
              )}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "expDate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Expiry Date"
          onChange={handleSort}
        />
      ),
      cell: ({ row }) => {
        const expDate = row.getValue("expDate") as string | number | Date;
        const remainingTime = new Date(expDate).getTime() - Date.now();
        return (
          <div className="flex space-x-2">
            <p className="max-w-[500px] truncate font-medium capitalize">
              {
                <Countdown
                  date={Date.now() + remainingTime}
                  renderer={CountDown}
                ></Countdown>
              }
            </p>
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <Popover>
            <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted !ring-0 !ring-offset-0 !outline-none"
              >
                <DotsHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-[160px] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {config.actionMenu?.map((item, index) => (
                <p
                  onClick={() => handleAction(item.value, row.original._id)}
                  key={index}
                  className={`${
                    item.value === "delete"
                      ? "text-primary-red bg-secondary-red hover:text-background duration-300 hover:bg-primary-red"
                      : "hover:bg-muted"
                  } my-1 cursor-pointer py-1.5 px-2 rounded-md text-sm`}
                >
                  {item.label}
                </p>
              ))}
            </PopoverContent>
          </Popover>
        );
      },
    },
  ];

  let content;

  if (isLoading) {
    content = <Loading loading={true} type="fullCover" />;
  } else if (!isLoading && isError) {
    content = <p className="text-primary-red">There was an error</p>;
  } else if (!isLoading && !isError) {
    content = (
      <div>
        <DashboardBreadcrumb />
        <div className="mt-5">
          <DataTable
            meta={meta}
            data={jobData}
            columns={columns}
            isRowNavigate={true}
            rowNavigateUrl={"jobs"}
            stateData={jobTableStateData}
            filterData={config.tableFilterData}
            reduxStateForPage={setAllApplicantPage}
            reduxStateForLimit={setAllApplicantLimit}
            reduxStateForFilter={setAllApplicantFilter}
            reduxStateForSearchTerm={setAllApplicantSearchTerm}
          />
        </div>

        <AlertModal
          title={<p className="text-primary-red">Are you absolutely sure?</p>}
          description={
            <p className="text-primary-orange">
              This action cannot be undone. This will permanently delete and
              remove your data from our servers.
            </p>
          }
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onOk={deleteJobHandler}
        />
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ManageJobs;
