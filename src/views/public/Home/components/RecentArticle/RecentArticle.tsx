import Container from "@/components/shared/Container";
import React from "react";
import { IArticle, config } from "./RecentArticle.config";
import { Card, CardContent } from "@/components/ui/card";
import ArticleCard from "./ArticleCard";

const RecentArticle = () => {
  return (
    <div className="bg-[#ECEDF2]">
      <Container className="py-20 ">
        <p className="text-center text-3xl font-semibold">
          {config.staticText.title}
        </p>
        <p className="text-center text-sm mt-5">{config.staticText.subTitle}</p>

        <div className="mt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {config.articleData?.map((item: IArticle) => <ArticleCard key={item.id} data={item} /> )}
        </div>
      </Container>
    </div>
  );
};

export default RecentArticle;
