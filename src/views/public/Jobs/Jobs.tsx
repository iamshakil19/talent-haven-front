import Container from "@/components/shared/Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  IPopularJobCategory,
  config,
} from "../Home/components/PopularCategories/PopularCategories.config";
import JobListCard from "@/components/shared/JobListCard";
import { Button } from "@/components/ui/button";
import { IoFilterSharp } from "react-icons/io5";
import JobFilterSidebar from "./JobFilterSidebar";
import Recruit from "../Home/components/Recruit";
import PageHeader, {
  IPageHeaderType,
} from "@/components/shared/pageHeader/PageHeader";
import ScrollToTop from "@/utils/scrollToTop";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import { useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import { IJob } from "@/interface";

const Jobs = () => {
  const [limit, setLimit] = useState<number>(0);
  const [sort, setSort] = useState<string | number>();

  const { data, isLoading, isError } = useGetAllJobsQuery({});

  const { data: jobData } = data?.data || {};

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  } else if (!isLoading && !isError && jobData?.length === 0) {
    <div>No job found</div>;
  } else if (!isLoading && !isError && jobData?.length > 0) {
    content = (
      <div>
        <div className="mt-20 grid gap-5 grid-cols-1 md:grid-cols-2">
          {jobData?.map((job: IJob) => (
            <JobListCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    );
  }

  useEffect(() => {
    // console.log(limit, sort);
  }, [limit, sort]);

  return (
    <div className="">
      <ScrollToTop />
      <Button
        isRipple
        className="flex items-center gap-2 lg:hidden justify-center fixed bottom-5 left-[50%] -translate-x-2/4 z-10"
      >
        <IoFilterSharp />
        Filter
      </Button>
      <PageHeader type={IPageHeaderType.DEFAULT} />
      <Container className="mt-10">
        <div className="grid grid-cols-4 gap-5 min-h-screen">
          <div>
            <JobFilterSidebar />
            <div className="mt-7 hidden lg:block">
              <Recruit />
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div className="flex items-end justify-between gap-3 flex-wrap">
              <div>
                <p className="text-sm text-primary-gray">
                  Show <span className="font-semibold">10</span> Jobs
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Select onValueChange={(e) => setSort(e)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Per Page</SelectLabel> */}
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="lowToHigh">
                        Salary ( Low {">"} High )
                      </SelectItem>
                      <SelectItem value="highToLow">
                        Salary ( High {">"} Low )
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select onValueChange={(e) => setLimit(Number(e))}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Per Page</SelectLabel>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>{content}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Jobs;
