import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiQuestionFill, RiQuestionLine } from "react-icons/ri";
import { TbInfoCircle, TbInfoCircleFilled } from "react-icons/tb";
import {
  PiBagSimpleFill,
  PiBagSimpleLight,
  PiPenNibFill,
} from "react-icons/pi";
import { PiPenNibLight } from "react-icons/pi";

interface IHeaderItems {
  id: string;
  label: string;
  path: string;
  iconOutline: ReactNode;
  iconFilled: ReactNode;
}

const headerItems: IHeaderItems[] = [
  {
    id: "1",
    label: "Home",
    path: "/home",
    iconOutline: <AiOutlineHome />,
    iconFilled: <AiFillHome className="text-primary" />,
  },
  {
    id: "2",
    label: "Jobs",
    path: "/jobs",
    iconOutline: <PiBagSimpleLight />,
    iconFilled: <PiBagSimpleFill className="text-primary" />,
  },
  {
    id: "3",
    label: "Blog",
    path: "#",
    iconOutline: <PiPenNibLight />,
    iconFilled: <PiPenNibFill className="text-primary" />,
  },
  {
    id: "4",
    label: "About",
    path: "/about",
    iconOutline: <TbInfoCircle />,
    iconFilled: <TbInfoCircleFilled className="text-primary" />,
  },
];

export default headerItems;
