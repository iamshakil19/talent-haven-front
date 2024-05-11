import Container from "@/components/shared/Container";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import PageHeader, {
  IPageHeaderType,
} from "@/components/shared/pageHeader/PageHeader";
import { useGetSingleJobQuery } from "@/redux/features/job/jobApi";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import JobSidebarOverview from "./JobSidebarOverview";
import RelatedJobs from "./RelatedJobs";
import ShareJob from "./ShareJob";
const JobDetails = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGetSingleJobQuery({ slug });

  const { data: job } = data || {};

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={"There was and error"} />;
  }
  if (!isLoading && !isError && job?._id) {
    content = (
      <div>
        <div className="grid grid-cols-4 mt-10">
          <div className="col-span-3">{parse(job.description)}</div>
          <div className="bg-[#f3f6ff] hidden lg:block px-5 py-7 rounded-md col-span-1">
            <JobSidebarOverview job={job} />
          </div>
        </div>

        <ShareJob />

        <div className="mt-10">
          <RelatedJobs technology={job?.technology} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader type={IPageHeaderType.JOB} data={job} />

      <Container>{content}</Container>
    </div>
  );
};

export default JobDetails;
