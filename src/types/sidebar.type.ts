import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem =
  | {
      title?: string;
      label: string;
      path: string;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  title?: string;
  name: string;
  path: string;
  authority: string[] | [];
  element?: ReactNode;
  children?: TUserPath[];
};
