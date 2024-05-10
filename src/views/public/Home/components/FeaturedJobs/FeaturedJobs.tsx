import Container from "@/components/shared/Container";
import {
  IPopularJobCategory,
  config,
} from "../PopularCategories/PopularCategories.config";
import JobListCard from "@/components/shared/JobListCard";
import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IJob } from "@/interface";

const FeaturedJobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllJobsQuery({});

  const { data: jobData } = data?.data || {};

  console.log(jobData);

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
          {jobData?.slice(0, 6)?.map((job: IJob) => (
            <JobListCard key={job._id} job={job} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button onClick={() => navigate("jobs")} isRipple>
            Load More
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Container className="py-20">
      <p className="text-center text-3xl font-semibold">Featured Jobs</p>
      <p className="text-center text-sm mt-5">
        Know your worth and find the job that qualify your life
      </p>

      {content}
    </Container>
  );
};

export default FeaturedJobs;
