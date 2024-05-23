import { GrSearch } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { PiBagSimpleLight } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { config } from "./Hero.config";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAllJobsSearchTerm } from "@/redux/features/job/jobSlice";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.job.allJobsPage);
  const navigate = useNavigate();
  return (
    <div
      className="bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB] flex items-center gap-5 justify-between px-5 overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-full lg:max-w-3xl">
          <h1 className="font-semibold text-3xl lg:text-5xl max-w-2xl tracking-wide !leading-snug">
            {config.STATIC_TEXT.HEADING_PART_1}{" "}
            <span className="text-primary">
              {config.STATIC_TEXT.HEADING_PART_2}{" "}
            </span>
            {config.STATIC_TEXT.HEADING_PART_3}
          </h1>
          <p className="text-sm my-10 text-gray-500">
            {config.STATIC_TEXT.SUB_HEADING}
          </p>

          <div className="lg:bg-white lg:px-7 w-full max-w-lg py-5 rounded-lg lg:shadow-sm flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex gap-1 items-center w-full bg-white py-3 px-5 lg:p-0 rounded-md shadow-sm lg:shadow-none">
              <GrSearch className="text-gray-500 text-2xl" />
              <input
                onChange={(e) => dispatch(setAllJobsSearchTerm(e.target.value))}
                value={searchTerm}
                type="text"
                placeholder="Job title or location"
                className="focus:outline-none p-2 w-full text-lg"
              />
            </div>
            <div className="w-full lg:w-fit mt-5 lg:mt-0">
              <Button
                onClick={() => navigate("/jobs")}
                isRipple
                className="h-12 w-full"
              >
                {config.STATIC_TEXT.FIND_JOBS_BTN_TEXT}
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm flex flex-wrap gap-2 mt-5 text-gray-500">
              <span className="font-semibold">
                {config.STATIC_TEXT.POPULAR_SEARCHES_TEXT}
              </span>
              {config.STATIC_TEXT.POPULAR_SEARCH_DATA?.map((item, index) => (
                <span className="cursor-pointer" key={index}>
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex justify-center items-end h-full">
        <div className="relative">
          <img src="img/home/hero-img.png" alt="" />

          <div className="bg-white w-fit p-7 rounded-md shadow-sm absolute top-0 -right-20 hidden xl:block">
            <p className="text-center font-semibold mb-5">
              {config.STATIC_TEXT.CANDIDATES}
            </p>
            <img src="img/home/multi-peoples.png" alt="" />
          </div>

          <div className="bg-white w-fit p-5 flex gap-3 items-center rounded-md shadow-sm absolute top-0 -left-20">
            <div className="bg-orange-100 w-fit p-3 rounded-md">
              <TfiEmail className="text-orange-500 text-2xl" />
            </div>
            <p className="max-w-44 font-medium">
              {config.STATIC_TEXT.WORK_INQUIRY}
            </p>
          </div>

          <div className="bg-white w-fit p-5 flex gap-3 items-center rounded-md shadow-sm absolute bottom-72 right-0">
            <div className="bg-orange-100 w-fit p-3 rounded-full">
              <PiBagSimpleLight className="text-orange-500 text-2xl" />
            </div>
            <div>
              <p className="font-medium mb-1">
                {" "}
                {config.STATIC_TEXT.CREATIVE_AGENCY}
              </p>
              <p className="text-sm">{config.STATIC_TEXT.STARTUP}</p>
            </div>
            <div className="p-3">
              <FaCheckCircle className="text-red-200 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
