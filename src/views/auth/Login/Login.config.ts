
import { z } from "zod";

interface IStaticText {
  HEADING: string;
  SUB_HEADING: string;
  SUBMIT: string;
}

const STATIC_TEXT: IStaticText = {
  HEADING: "Welcome back!",
  SUB_HEADING: "Please enter your credentials to sign in!",
  SUBMIT: "Submit",
};

const LOGIN_SCHEMA = z.object({
  email: z
    .string({ required_error: "email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  rememberMe: z.boolean().optional(),
});

export const LOGIN_DEFAULT_VALUE = {
  email: "",
  password: "",
  rememberMe: true,
};


export const LoginConfig = {
  STATIC_TEXT,
  LOGIN_SCHEMA,
  LOGIN_DEFAULT_VALUE,
};
