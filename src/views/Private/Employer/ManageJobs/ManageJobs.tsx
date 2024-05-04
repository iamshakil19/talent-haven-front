import React, { useEffect, useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import { DataTable } from "@/components/ui/data-table";
import Loading from "@/components/shared/Loading";
import moment from "moment";

export type TJob = {
  _id: string;
  updatedAt: string;
  type: string;
  title: string;
  technology: string[];
  salary: number;
  location: string;
  isUrgent: boolean;
  id: string;
  experience: number;
  description: string;
  employer: any;
  createdAt: string;
  category: string;
};

export const columns: ColumnDef<TJob>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ row }) => {
      console.log(row);
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <p> {moment(date as string).format("lll")} </p>;
    },
  },
];

const ManageJobs = () => {
  const { data, isLoading, isError } = useGetAllJobsQuery(undefined);

  const { data: JobData } = data?.data || {};

  console.log(JobData);

  let content;

  if (isLoading) {
    content = <Loading loading={true} type="fullCover" />;
  } else if (!isLoading && isError) {
    content = <p className="text-primary-red">There was an error</p>;
  } else if (!isLoading && !isError && JobData?.length === 0) {
    <div>No product found</div>;
  } else if (!isLoading && !isError && JobData?.length > 0) {
    content = <DataTable columns={columns} data={JobData} />;
  }

  return <div>{content}</div>;
};

export default ManageJobs;
