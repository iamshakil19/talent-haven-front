import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { PiBookmarkSimpleThin, PiBuildingsLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import moment from "moment";
import { toast } from "sonner";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const PageHeaderForJob = ({ data, user }: { data: any; user: any }) => {
  const navigate = useNavigate();

  let typeName = data?.type;

  switch (data?.type) {
    case "partTime":
      typeName = "Part Time";
      break;
    case "fullTime":
      typeName = "Full Time";
      break;

    default:
      break;
  }

  // Time formation
  const duration = moment.duration(moment().diff(moment(data?.createdAt)));
  const formattedDuration = duration.humanize();

  // Name splitting

  const nameParts = data?.employer?.name?.split(" ");

  let shortName = "";
  nameParts?.forEach((part: string) => {
    if (part?.length > 1) {
      shortName += part.charAt(0).toUpperCase();
    } else {
      shortName += part.toUpperCase();
    }
  });

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
    <Card className=" transition-all duration-300 bg-transparent shadow-none border-none">
      <CardContent className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <div>
            <Avatar className="rounded-md w-24 h-24 bg-primary-gray/30">
              <AvatarImage
                className="rounded-md"
                src={data?.employer?.profile?.profileImage}
                alt="Company logo"
              />
              <AvatarFallback className="bg-primary-gray/30 rounded-md">
                {shortName}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-between gap-4 relative w-full">
            <p className="font-medium duration-300 transition-all ease-in-out max-w-sm capitalize text-2xl">
              {data?.title}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <p className="flex items-center gap-1 text-primary-gray">
                <PiBuildingsLight size={19} />
                <span className="text-sm capitalize">
                  {data?.employer.name}
                </span>
              </p>
              {data?.employer?.profile?.address ? (
                <p className="flex items-center gap-1 text-primary-gray">
                  <IoLocationOutline size={19} />
                  <span className="text-sm">
                    {data?.employer?.profile?.address?.length > 15
                      ? data?.employer?.profile?.address?.slice(0, 15) + "..."
                      : data?.employer?.profile?.address}
                  </span>
                </p>
              ) : null}
              <p className="flex items-center gap-1 text-primary-gray">
                <BsClock />
                <span className="text-sm">{formattedDuration} ago</span>
              </p>
              <p className="flex items-center gap-1 text-primary-gray">
                <LiaMoneyBillWaveSolid size={19} />
                <NumericFormat
                value={data?.salary}
                thousandSeparator
                displayType="text"
                className="text-sm w-20"
              />
              </p>
            </div>
            <div className="flex h-fit items-center gap-4 flex-wrap">
              <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-blue text-primary-blue capitalize ring-1 ring-primary-blue">
                {typeName}
              </span>
              <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-green text-primary-green capitalize ring-1 ring-primary-green">
                {data?.location}
              </span>
              {data?.isUrgent ? (
                <span className="px-4 py-[5px] tracking-wide rounded-full text-xs bg-secondary-orange text-primary-orange ring-1 ring-primary-orange">
                  Urgent
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button isRipple className="text-sm px-10 py-3 " size={"full"}>
            Apply For Job
          </Button>
          <Button
            isRipple
            className="py-3 w-16"
            size={"full"}
            variant={"outline"}
          >
            <PiBookmarkSimpleThin className="text-4xl" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageHeaderForJob;
