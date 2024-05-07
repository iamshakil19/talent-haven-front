
import { useGetAllJobsQuery } from "@/redux/features/job/jobApi";
import Loading from "@/components/shared/Loading";


export type TJob = {
  _id: string;
  updatedAt: string;
  type: string;
  title: string;
  technology: string[];
  salary: number;
  location: string;
  isUrgent: boolean;
  id: string;
  experience: number;
  description: string;
  employer: any;
  createdAt: string;
  category: string;
};



const ManageJobs = () => {
  const { data, isLoading, isError } = useGetAllJobsQuery({});

  const { data: JobData, meta } = data?.data || {};

  let content;

  if (isLoading) {
    content = <Loading loading={true} type="fullCover" />;
  } else if (!isLoading && isError) {
    content = <p className="text-primary-red">There was an error</p>;
  } else if (!isLoading && !isError && JobData?.length === 0) {
    <div>No product found</div>;
  } else if (!isLoading && !isError && JobData?.length > 0) {
    content = (
      <div>

        this is manage jobs
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ManageJobs;
