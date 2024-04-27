import Container from "@/components/shared/Container";
import {
  IPopularJobCategory,
  config,
} from "../PopularCategories/PopularCategories.config";
import JobListCard from "@/components/shared/JobListCard";

const FeaturedJobs = () => {
  return (
    <Container className="py-20">
      <p className="text-center text-3xl font-semibold">Featured Jobs</p>
      <p className="text-center text-sm mt-5">
        Know your worth and find the job that qualify your life
      </p>
      <div className="mt-20 grid gap-5 grid-cols-1 md:grid-cols-2">
        {config.PopularJobCategories?.map((item: IPopularJobCategory) => (
          <JobListCard key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJobs;
