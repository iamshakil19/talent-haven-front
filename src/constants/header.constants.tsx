import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiQuestionFill, RiQuestionLine } from "react-icons/ri";
import { TbInfoCircle, TbInfoCircleFilled } from "react-icons/tb";

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
    iconFilled: <AiFillHome />,
  },
  {
    id: "2",
    label: "About",
    path: "/about",
    iconOutline: <TbInfoCircle />,
    iconFilled: <TbInfoCircleFilled />,
  },
  {
    id: "3",
    label: "FAQ",
    path: "/faq",
    iconOutline: <RiQuestionLine />,
    iconFilled: <RiQuestionFill />,
  },
];

export default headerItems;
