import DashboardBreadcrumb from "@/components/shared/DashboardBreadcrumb";
import React, { useEffect, useState } from "react";
import { DataTable } from "./components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Loading from "@/components/shared/Loading";
import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";
import { Job } from "./data/schema";
import { locations } from "./data/data";
import Countdown from "react-countdown";
import { RiComputerLine } from "react-icons/ri";
import { PiOfficeChairFill } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { useAppSelector } from "@/redux/hooks";

import { setAllApplicantFilter } from "@/redux/features/job/jobSlice";

const AllApplicants = () => {
  const { filter } = useAppSelector((state) => state.job.allApplicantsTable);

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sort, setSort] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = sortBy + sort;

  // filter?.forEach(({ name, value }: { name: string; value: any }) => {
  //   // If the filter field already exists in the query, append its value to an array
  //   // Otherwise, assign its value directly
  //   if (query[name]) {
  //     // If the filter field value is already an array, push the new value into it
  //     // Otherwise, create a new array with the existing and new values
  //     if (Array.isArray(query[name])) {
  //       query[name].push(value);
  //     } else {
  //       query[name] = [query[name], value];
  //     }
  //   } else {
  //     query[name] = value;
  //   }
  // });

  console.log(query);

  const { data, isLoading, isError } = useGetAllJobsQuery({ ...query });

  // console.log(query);

  const { data: jobData, meta } = data?.data || {};

  const handleSort = (sortFieldName: string, sortFieldBy: string) => {
    setSort(sortFieldName);
    setSortBy(sortFieldBy);
  };

  // count down showing
  const handleCountdown = ({
    days,
    hours,
    minutes,
    // seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    // seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <p className="bg-secondary-red text-primary-red px-3 py-1 text-xs rounded-full tracking-wide">
          Time Expired
        </p>
      );
    } else {
      return (
        <p className="text-sm flex items-center justify-center gap-4">
          <span className="flex flex-col items-center justify-center">
            <span>{days}</span>
            <span className="text-xs">Days</span>
          </span>
          <span className="flex flex-col items-center justify-center">
            <span>{hours}</span>
            <span className="text-xs">Hours</span>
          </span>
          <span className="flex flex-col items-center justify-center">
            <span>{minutes}</span>
            <span className="text-xs">Minutes</span>
          </span>
        </p>
      );
    }
  };

  const filterData = [
    {
      label: "Category",
      value: "category",
      options: [
        {
          label: "Web Development",
          value: "web development",
        },
        {
          label: "App Development",
          value: "app development",
        },
        {
          label: "Machine Learning",
          value: "machine learning",
        },
        {
          label: "Wordpress Development",
          value: "wordpress development",
        },
      ],
    },
    {
      label: "Type",
      value: "type",
      options: [
        {
          label: "Full Time",
          value: "fullTime",
          icon: FaHandshake,
        },
        {
          label: "Part Time",
          value: "partTime",
          icon: FaHandshake,
        },
        {
          label: "Contract",
          value: "contract",
          icon: FaHandshake,
        },
        {
          label: "Internship",
          value: "internship",
          icon: FaHandshake,
        },
        {
          label: "Freelance",
          value: "freelance",
          icon: FaHandshake,
        },
      ],
    },
    {
      label: "Location",
      value: "location",
      options: [
        {
          label: "Remote",
          value: "remote",
          icon: RiComputerLine,
        },
        {
          label: "Onsite",
          value: "onsite",
          icon: PiOfficeChairFill,
        },
        {
          label: "Hybrid",
          value: "hybrid",
          icon: IoMdSwap,
        },
      ],
    },
    {
      label: "Urgent",
      value: "isUrgent",
      options: [
        {
          label: "Urgent",
          value: true,
          icon: RiComputerLine,
        },
        {
          label: "Normal",
          value: false,
          icon: PiOfficeChairFill,
        },
      ],
    },
  ];

  const columns: ColumnDef<Job>[] = [
    {
      id: "id",
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
        const location = locations.find(
          (priority) => priority.value === row.getValue("location")
        );

        if (!location) {
          return null;
        }

        return (
          <div className="flex items-center">
            {location.icon && (
              <location.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{location.label}</span>
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
                  renderer={handleCountdown}
                ></Countdown>
              }
            </p>
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  let content;

  if (isLoading) {
    content = <Loading loading={true} type="fullCover" />;
  } else if (!isLoading && isError) {
    content = <p className="text-primary-red">There was an error</p>;
  } else if (!isLoading && !isError && jobData?.length === 0) {
    <div>No product found</div>;
  } else if (!isLoading && !isError && jobData?.length > 0) {
    content = (
      <div>
        <DashboardBreadcrumb />
        <div className="mt-10">
          <DataTable data={jobData} columns={columns} filterData={filterData} reduxStateForFilter={setAllApplicantFilter} />
        </div>
      </div>
    );
  }
  return content;
};

export default AllApplicants;
