import Container from "@/components/shared/Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
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
import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import { IJob } from "@/interface";
import { useAppDispatch, useAppSelector, useDebounced } from "@/redux/hooks";
import { mergeFilters } from "@/utils/margeFilters";
import { config } from "./Jobs.config";
import { setAllJobsLimit, setAllJobsPage } from "@/redux/features/job/jobSlice";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Jobs = () => {
  const dispatch = useAppDispatch();

  const {
    filter,
    searchTerm,
    limit: stateLimit,
    page: statePage,
  } = useAppSelector((state) => state.job.allJobsPage);

  const mergedFilters = mergeFilters(filter);

  const query: Record<string, any> = {};

  const [sort, setSort] = useState<string>("");

  query["limit"] = stateLimit;
  query["page"] = statePage;
  query["sort"] = sort;

  Object.entries(mergedFilters).forEach(([name, value]) => {
    if (typeof value === "string") {
      query[name] = value.includes(",") ? value.split(",") : value;
    } else {
      query[name] = value;
    }
  });

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading, isError } = useGetAllJobsQuery({ ...query });

  const { data: jobData, meta } = data?.data || {};

  const { page, totalPage } = meta || {};

  const paginationItems = Array.from({ length: totalPage }, (_, i) => i + 1);

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
        <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2">
          {jobData?.map((job: IJob) => (
            <JobListCard key={job._id} job={job} />
          ))}
        </div>
        <div className="flex items-center justify-end space-x-6 lg:space-x-8 mt-10">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={stateLimit.toString()}
              onValueChange={(value) => {
                dispatch(setAllJobsLimit(Number(value)));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={stateLimit.toString()} />
              </SelectTrigger>
              <SelectContent side="top">
                {config.jobFilter.limit.options?.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {page} of {totalPage}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => dispatch(setAllJobsPage(Number(1)))}
              disabled={statePage == 1}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => dispatch(setAllJobsPage(Number(statePage - 1)))}
              disabled={statePage == 1}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            {paginationItems?.map((item, index) => (
              <Button
                key={item}
                variant={`${item === statePage ? "default" : "outline"}`}
                className="h-8 w-8 p-0"
                onClick={() => dispatch(setAllJobsPage(Number(item)))}
                disabled={
                  (statePage === 1 && index === 0) ||
                  (statePage === totalPage &&
                    index === paginationItems.length - 1)
                }
              >
                {item}
              </Button>
            ))}

            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => dispatch(setAllJobsPage(Number(statePage + 1)))}
              disabled={statePage === totalPage || totalPage === 0}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => dispatch(setAllJobsPage(Number(totalPage)))}
              disabled={statePage === totalPage || totalPage === 0}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
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
                  Show <span className="font-semibold">{stateLimit}</span> Jobs
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Select onValueChange={(e) => setSort(e)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={config.jobFilter.sortBy.label} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {config.jobFilter.sortBy.options?.map((option, index) => (
                        <SelectItem key={index} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
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
