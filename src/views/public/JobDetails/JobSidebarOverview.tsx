import { CiCalendar } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { NumericFormat } from "react-number-format";
import { MdOutlineWorkOutline } from "react-icons/md";
import moment from "moment";
import { IJob } from "@/interface";
import { RiUserStarLine } from "react-icons/ri";

const JobSidebarOverview = ({ job }: { job: IJob }) => {
  const duration = moment.duration(moment().diff(moment(job?.createdAt)));
  const formattedDuration = duration.humanize();

  return (
    <div>
      <p className="text-lg font-medium">Job Overview</p>

      <div className="flex gap-4 mt-7">
        <div className="text-primary">
          <CiCalendar size={25} />
        </div>
        <div>
          <p>Date Posted</p>
          <p className="text-sm mt-1 text-primary-gray">
            {formattedDuration} ago
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <div className="text-primary">
          <GiSandsOfTime size={25} />
        </div>
        <div>
          <p>Expiration Date</p>
          <p className="text-sm mt-1 text-primary-gray">
            {moment(job?.expDate).endOf("day").fromNow()}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <div className="text-primary">
          <RiUserStarLine size={25} />
        </div>
        <div>
          <p>Experience</p>
          <p className="text-sm mt-1 text-primary-gray capitalize">
            {job?.experience} Years
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <div className="text-primary">
          <IoLocationOutline size={25} />
        </div>
        <div>
          <p>Location</p>
          <p className="text-sm mt-1 text-primary-gray capitalize">
            {job?.location}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <div className="text-primary">
          <LiaMoneyBillWaveSolid size={25} />
        </div>
        <div>
          <p>Salary</p>
          <p className="text-sm mt-1 text-primary-gray capitalize">
            <NumericFormat
              value={job?.salary}
              thousandSeparator
              displayType="text"
            />
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <div className="text-primary">
          <MdOutlineWorkOutline size={25} />
        </div>

        <div>
          <p>Job Skills</p>
          <p className="text-xs text-primary-gray capitalize flex items-center gap-3 flex-wrap mt-3">
            {job?.technology?.map((tech: string, index: number) => (
              <span
                key={index}
                className="capitalize bg-background px-3 py-1 rounded-sm tracking-wide"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobSidebarOverview;
