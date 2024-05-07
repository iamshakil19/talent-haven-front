
import { FaHandshake } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { PiOfficeChairFill } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";

export const types = [
  {
    label: "Full Time",
    value: "fullTime",
    icon: FaHandshake,
  },
  {
    label: "Part Time",
    value: "partTime",
    icon: FaHandshake,
  },
  {
    label: "Contract",
    value: "contract",
    icon: FaHandshake,
  },
  {
    label: "Internship",
    value: "internship",
    icon: FaHandshake,
  },
  {
    label: "Freelance",
    value: "freelance",
    icon: FaHandshake,
  },
];

export const locations = [
  {
    label: "Remote",
    value: "remote",
    icon: RiComputerLine,
  },
  {
    label: "Onsite",
    value: "onsite",
    icon: PiOfficeChairFill,
  },
  {
    label: "Hybrid",
    value: "hybrid",
    icon: IoMdSwap,
  },
];
