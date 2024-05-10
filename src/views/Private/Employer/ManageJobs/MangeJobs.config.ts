import { FaHandshake } from "react-icons/fa6";
import { IoMdSwap } from "react-icons/io";
import { PiOfficeChairFill } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { z } from "zod";

const jobSchema = z.object({
  _id: z.string(),
  id: z.string(),
  title: z.string(),
  type: z.string(),
  location: z.string(),
  category: z.string(),
  description: z.string(),
  expDate: z.string(),
  status: z.string(),
  slug: z.string(),
  experience: z.number(),
  isUrgent: z.boolean(),
  views: z.number(),
  isDeleted: z.boolean(),
  salary: z.number(),
  technology: z.array(z.string()),
  employer: z.any(),
  profile: z.any(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Job = z.infer<typeof jobSchema>;

export type TJob = {
  _id: string;
  updatedAt: string;
  type: string;
  title: string;
  technology: string[];
  salary: number;
  location: string;
  slug: string;
  isUrgent: boolean;
  id: string;
  experience: number;
  description: string;
  employer: any;
  profile: any;
  expDate: string;
  status: string;
  views: number;
  isDeleted: boolean;
  createdAt: string;
  category: string;
};

const tableFilterData = [
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
        value: "true",
        icon: RiComputerLine,
      },
      {
        label: "Normal",
        value: "false",
        icon: PiOfficeChairFill,
      },
    ],
  },
  {
    label: "Status",
    value: "status",
    options: [
      {
        label: "Active",
        value: "active",
        icon: RiComputerLine,
      },
      {
        label: "Hired",
        value: "hired",
        icon: RiComputerLine,
      },
      {
        label: "Closed",
        value: "closed",
        icon: RiComputerLine,
      },
    ],
  },
];

const actionMenu = [
  {
    label: "Edit",
    value: "edit",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

export const config = {
  tableFilterData,
  actionMenu,
};
