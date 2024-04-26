import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IArticle, config } from "./RecentArticle.config";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
const ArticleCard = ({ data }: { data: IArticle }) => {

  const { id, img, date, comments, title, description } = data || {};

  return (
    <div className="group w-full max-w-md mx-auto">
      <Card className=" group-hover:shadow-lg group-hover:shadow-primary-gray/15 transition-all duration-300">
        <CardContent className="p-2">
          <div className="overflow-hidden rounded-md">
            <img
              className="cursor-pointer rounded-md w-full h-56 object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
              src={img}
              alt=""
            />
          </div>

          <div className="p-5">
            <div className="text-primary-gray text-xs flex items-center gap-3 mb-4">
              <span>{date}</span>
              <GoDotFill />
              <span>{comments} Comment</span>
            </div>

            <p className="text-lg font-medium mb-3 cursor-pointer">{title}</p>
            <p className="text-primary-gray mb-5 text-sm leading-relaxed">
              {description?.length > 120
                ? description?.slice(0, 120) + "..."
                : description}
            </p>

            <Link
              to="#"
              className="text-primary-blue flex items-center gap-3 text-sm cursor-pointer"
            >
              {config.staticText.readBtnText}{" "}
              <RiArrowRightSLine className="text-2xl" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;
