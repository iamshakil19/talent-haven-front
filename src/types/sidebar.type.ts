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
      icon?: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TRoutePath = {
  title?: string;
  name: string;
  path: string;
  icon?: ReactNode;
  authority: string[] | [];
  element?: ReactNode;
  children?: TRoutePath[];
};
