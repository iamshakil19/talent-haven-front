import { INPUT_TYPES } from "@/constants/InputTypes";
import { INPUT_SCHEMA } from "@/types/InputInterface";
import { z } from "zod";

const staticText = {
  title: "Add New Job",
  subTitle: "Submit your job",
  submitBtnText: "Submit",
};

const reactQuillModule = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    // ["link", "image", "video"],
    ["link"],
    ["clean"],
    ["code-block"],
  ],
};

const reactQuillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

const FORM_SCHEMA = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .nonempty({ message: "Title is required" }),
  description: z
    .string({ required_error: "Description is required" })
    .nonempty({ message: "Description is required" }),
  category: z
    .string({ required_error: "Category is required" })
    .nonempty({ message: "Category is required" }),
  type: z
    .string({ required_error: "Job type is required" })
    .nonempty({ message: "Job type is required" }),
  location: z
    .string({ required_error: "Location is required" })
    .nonempty({ message: "Location is required" }),
  experience: z
    .string({ required_error: "Experience is required" })
    .nonempty({ message: "Experience is required" }),
  isUrgent: z.boolean().optional(),
  salary: z
    .string({ required_error: "Salary is required" })
    .nonempty({ message: "Salary is required" }),
});

const FORM_DEFAULT_VALUE = {
  title: "",
  description: "",
  category: "",
  type: "",
  location: "",
  experience: "",
  salary: "",
  isUrgent: false,
};

export type FormFieldName =
  | "type"
  | "title"
  | "description"
  | "category"
  | "location"
  | "experience"
  | "salary"
  | "isUrgent";

const FORM_INPUTS: INPUT_SCHEMA[] = [
  {
    name: "title",
    label: "Title",
    placeholder: "Type your title",
    required: true,
    type: INPUT_TYPES.TEXT,
  },
  {
    name: "category",
    label: "Category",
    placeholder: "Select category",
    required: true,
    type: INPUT_TYPES.SELECT,
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
    name: "type",
    label: "Job Type",
    placeholder: "Select job type",
    required: true,
    type: INPUT_TYPES.SELECT,
    options: [
      {
        label: "Full Time",
        value: "fullTime",
      },
      {
        label: "Part Time",
        value: "partTime",
      },
      {
        label: "Contract",
        value: "contract",
      },
      {
        label: "Internship",
        value: "internship",
      },
      {
        label: "Freelance",
        value: "freelance",
      },
    ],
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Select location",
    required: true,
    type: INPUT_TYPES.SELECT,
    options: [
      {
        label: "Remote",
        value: "remote",
      },
      {
        label: "Onsite",
        value: "onsite",
      },
      {
        label: "Hybrid",
        value: "hybrid",
      },
    ],
  },
  {
    name: "experience",
    label: "Experience",
    placeholder: "Minimum years of experience",
    required: true,
    type: INPUT_TYPES.SELECT,
    options: [
      {
        label: "Fresher",
        value: "0",
      },
      {
        label: "1 Year",
        value: "1",
      },
      {
        label: "2 Year",
        value: "2",
      },
      {
        label: "3 Year",
        value: "3",
      },
      {
        label: "4 Year",
        value: "4",
      },
      {
        label: "5 or more",
        value: "5",
      },
    ],
  },
  {
    name: "salary",
    label: "Salary",
    placeholder: "Type salary",
    required: true,
    type: INPUT_TYPES.NUMBER,
  },
  {
    name: "isUrgent",
    label: "Urgent",
    placeholder: "Urgent Hiring ?",
    required: false,
    type: INPUT_TYPES.CHECKBOX,
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Type your description",
    required: true,
    type: INPUT_TYPES.TEXT,
  },
];

export const config = {
  staticText,
  FORM_SCHEMA,
  FORM_DEFAULT_VALUE,
  reactQuillModule,
  reactQuillFormats,
  FORM_INPUTS,
};
