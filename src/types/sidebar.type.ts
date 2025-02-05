import { ReactNode } from 'react';

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem =
  | {
    key: string | undefined;
    title?: string;
    email?: string;
    label: ReactNode;
    children?: TSidebarItem[];
  }
  | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
