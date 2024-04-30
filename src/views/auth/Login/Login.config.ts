import { z } from "zod";

interface IStaticText {
  HEADING: string;
  SUB_HEADING: string;
  SUBMIT_BTN_TEXT: string;
}

const STATIC_TEXT: IStaticText = {
  HEADING: "Login",
  SUB_HEADING: "Enter your email below to login to your account",
  SUBMIT_BTN_TEXT: "Login",
};

const FORM_SCHEMA = z.object({
  email: z
    .string({ required_error: "Email is required" })
    // .min(1, { message: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  rememberMe: z.boolean().optional(),
});

export const FORM_DEFAULT_VALUE = {
  email: "",
  password: "",
  rememberMe: true,
};

export const LoginConfig = {
  STATIC_TEXT,
  FORM_SCHEMA,
  FORM_DEFAULT_VALUE,
};
