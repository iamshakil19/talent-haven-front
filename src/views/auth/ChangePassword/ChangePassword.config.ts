import { z } from "zod";

const staticText = {
  title: "Change Password!",
  subTitle: "Ready to jump back in?",
  submitBtnText: "Update",
};

const FORM_SCHEMA = z.object({
  oldPassword: z
    .string({ required_error: "Old password is required" })
    // .min(1, { message: "Email is required" })
    .nonempty({ message: "Old password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  newPassword: z
    .string({ required_error: "New Password is required" })
    .nonempty({ message: "New Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const FORM_DEFAULT_VALUE = {
  oldPassword: "",
  newPassword: "",
};

export const config = {
  staticText,
  FORM_SCHEMA,
  FORM_DEFAULT_VALUE,
};
