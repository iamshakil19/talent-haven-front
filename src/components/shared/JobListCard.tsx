import { Card, CardContent } from "../ui/card";
import { PiBuildingsLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const JobListCard = () => {
  const navigate = useNavigate();

  const handleBookmark = (e: any) => {
    e.stopPropagation();
    console.log("bookmarked");
  };

  return (
    <Card
      onClick={() => navigate(`/jobs/${"software-engineer-983456"}`)}
      className="hover:shadow-lg cursor-pointer hover:shadow-primary-gray/10 transition-all duration-300"
    >
      <CardContent className="p-7 flex gap-3">
        <div>
          <img
            src="https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-4 relative w-full">
          <span
            onClick={(e) => handleBookmark(e)}
            className="absolute -right-4 -top-5 hover:bg-primary-gray/20 h-8 w-8 rounded-full transition-all duration-300 ease-in-out hidden md:flex items-center justify-center"
          >
            <PiBookmarkSimpleThin className="text-lg" />
          </span>

          <p className="font-medium hover:text-primary duration-300 transition-all ease-in-out cursor-pointer max-w-sm">
            Software Engineer (Android), Libraries
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="flex items-center gap-1 text-primary-gray">
              <PiBuildingsLight size={19} />
              <span className="text-sm">Segment</span>
            </p>
            <p className="flex items-center gap-1 text-primary-gray">
              <IoLocationOutline size={19} />
              <span className="text-sm">London, UK</span>
            </p>
            <p className="flex items-center gap-1 text-primary-gray">
              <BsClock />
              <span className="text-sm">11 hours ago</span>
            </p>
            <p className="flex items-center gap-1 text-primary-gray">
              <LiaMoneyBillWaveSolid size={19} />
              <span className="text-sm">35k - 45k</span>
            </p>
          </div>
          <div className="flex h-fit items-center gap-4 flex-wrap">
            <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-blue text-primary-blue">
              Full Time
            </span>
            <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-green text-primary-green">
              Private
            </span>
            <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-orange text-primary-orange">
              Urgent
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListCard;
