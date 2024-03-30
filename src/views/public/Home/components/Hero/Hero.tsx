import { GrSearch } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { PiBagSimpleLight } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { config } from "./Hero.config";

const Hero = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB] flex items-center gap-5 justify-between px-5 overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-full lg:max-w-3xl">
          <h1 className="font-semibold text-3xl lg:text-5xl max-w-2xl leading-loose tracking-wider">
            {config.STATIC_TEXT.HEADING_PART_1}{" "}
            <span className="text-primary-600">
              {config.STATIC_TEXT.HEADING_PART_2}
            </span>{" "}
            {config.STATIC_TEXT.HEADING_PART_3}
          </h1>
          <p className="text-sm my-10 text-gray-500">
            {config.STATIC_TEXT.SUB_HEADING}
          </p>

          <form className="lg:bg-white lg:px-10 w-full py-7 rounded-md lg:shadow-sm flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex gap-1 items-center w-full bg-white py-3 px-5 lg:p-0 rounded-md shadow-sm lg:shadow-none">
              <GrSearch className="text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="focus:outline-none p-2 w-full text-lg"
              />
            </div>

            <div className="hidden lg:block h-auto w-1 border-r-2 border-gray-200"></div>

            <div className="flex gap-1 items-center w-full bg-white py-3 px-5 lg:p-0 rounded-md shadow-sm lg:shadow-none">
              <SlLocationPin className="text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="City or postcode"
                className="focus:outline-none p-2 w-full text-lg"
              />
            </div>

            <div className="w-full lg:w-fit mt-5 lg:mt-0">
              <button className="bg-primary-500 hover:bg-primary-600 transition-all duration-200 text-white whitespace-nowrap px-5 py-4 lg:py-3 rounded-md w-full text-lg font-medium">
                {config.STATIC_TEXT.FIND_JOBS_BTN_TEXT}
              </button>
            </div>
          </form>
          <div>
            <p className="text-sm flex flex-wrap gap-2 mt-5 text-gray-500">
              <span className="font-semibold">
                {config.STATIC_TEXT.POPULAR_SEARCHES_TEXT}
              </span>
              {config.STATIC_TEXT.POPULAR_SEARCH_DATA?.map((item, index) => (
                <span key={index}>{item}</span>
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
