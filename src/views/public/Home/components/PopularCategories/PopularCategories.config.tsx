import { ReactNode } from "react";
import { LiaBullhornSolid } from "react-icons/lia";

export interface IPopularJobCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const PopularJobCategories: IPopularJobCategory[] = [
  {
    id: "1",
    title: "Marketing",
    subtitle: "86",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "2",
    title: "Design",
    subtitle: "43",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "3",
    title: "Development",
    subtitle: "12",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "4",
    title: "Human Resource",
    subtitle: "55",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "5",
    title: "Customer Service",
    subtitle: "2",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "6",
    title: "Project Management",
    subtitle: "92",
    icon: <LiaBullhornSolid />,
  },
  {
    id: "7",
    title: "Accounting",
    subtitle: "2",
    icon: <LiaBullhornSolid />,
  },
];

export default PopularJobCategories;
