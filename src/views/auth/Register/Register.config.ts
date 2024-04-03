import { z } from "zod";

interface IStaticText {
  HEADING: string;
  SUB_HEADING: string;
  SUBMIT_BTN_TEXT: string;
}

const STATIC_TEXT: IStaticText = {
  HEADING: "Register",
  SUB_HEADING: "Create a Free Talent Haven Account",
  SUBMIT_BTN_TEXT: "Register",
};

const FORM_SCHEMA = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z
    .string({ required_error: "email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const FORM_DEFAULT_VALUE = {
  name: "",
  email: "",
  password: "",
};

export const RegisterConfig = {
  STATIC_TEXT,
  FORM_SCHEMA,
  FORM_DEFAULT_VALUE,
};
