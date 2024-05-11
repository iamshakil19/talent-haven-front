import { Card, CardContent } from "../ui/card";
import { PiBuildingsLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { IJob } from "@/interface";
import moment from "moment";
// import { Avatar } from "@components/ui/avatar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const JobListCard = ({ job }: { job: IJob }) => {
  const {
    _id,
    category,
    location,
    salary,
    title,
    slug,
    isUrgent,
    type,
    employer,
    createdAt,
  } = job || {};

  console.log(employer);

  let typeName = type;

  switch (type) {
    case "partTime":
      typeName = "Part Time";
      break;
    case "fullTime":
      typeName = "Full Time";
      break;

    default:
      break;
  }

  const navigate = useNavigate();

  // Time formation
  const duration = moment.duration(moment().diff(moment(createdAt)));
  const formattedDuration = duration.humanize();

  // Name splitting

  const nameParts = employer?.name?.split(" ");

  let shortName = "";
  nameParts.forEach((part: string) => {
    if (part.length > 1) {
      shortName += part.charAt(0).toUpperCase();
    } else {
      shortName += part.toUpperCase();
    }
  });

  const user = useAppSelector(selectCurrentUser);

  const handleBookmark = (e: any) => {
    e.stopPropagation();
    const id = "1";

    if (!user) {
      navigate("/login");
      toast.warning("You must be logged in", {
        id: "bookmark",
        duration: 2000,
      });
    } else if (user && user?.role !== "candidate") {
      toast.warning("Only candidate can bookmark this job", {
        id: "bookmark",
        duration: 2000,
      });
    } else {
      toast.success("Successfully Bookmarked", {
        id: "bookmark",
        duration: 2000,
      });
    }
  };

  return (
    <Card
      onClick={() => navigate(`/jobs/${slug}`)}
      className="hover:shadow-lg cursor-pointer hover:shadow-primary-gray/10 transition-all duration-300"
    >
      <CardContent className="p-7 flex gap-3">
        <div>
          <Avatar className="rounded-md w-11 h-11 bg-primary-gray/30">
            <AvatarImage
              className="rounded-md"
              src={employer?.profile?.profileImage}
              alt="Company logo"
            />
            <AvatarFallback className="bg-primary-gray/30 rounded-md">
              {shortName}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-between gap-4 relative w-full">
          <span
            onClick={(e) => handleBookmark(e)}
            className="absolute -right-4 -top-5 hover:bg-primary-gray/20 h-8 w-8 rounded-full transition-all duration-300 ease-in-out hidden md:flex items-center justify-center"
          >
            <PiBookmarkSimpleThin className="text-lg" />
          </span>

          <p className="font-medium hover:text-primary duration-300 transition-all ease-in-out cursor-pointer max-w-sm capitalize">
            {title}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="flex items-center gap-1 text-primary-gray">
              <PiBuildingsLight size={19} />
              <span className="text-sm capitalize">{employer.name}</span>
            </p>
            {employer?.profile?.address ? (
              <p className="flex items-center gap-1 text-primary-gray">
                <IoLocationOutline size={19} />
                <span className="text-sm">
                  {employer?.profile?.address?.length > 15
                    ? employer?.profile?.address?.slice(0, 15) + "..."
                    : employer?.profile?.address}
                </span>
              </p>
            ) : null}
            <p className="flex items-center gap-1 text-primary-gray">
              <BsClock />
              <span className="text-sm">{formattedDuration} ago</span>
            </p>
            <p className="flex items-center gap-1 text-primary-gray">
              <LiaMoneyBillWaveSolid size={19} />
              <span className="text-sm">{salary}</span>
            </p>
          </div>
          <div className="flex h-fit items-center gap-4 flex-wrap">
            <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-blue text-primary-blue capitalize">
              {typeName}
            </span>
            <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-green text-primary-green capitalize">
              {location}
            </span>
            {isUrgent ? (
              <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-orange text-primary-orange">
                Urgent
              </span>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListCard;
