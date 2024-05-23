
const RelatedJobs = ({ technology }: { technology: string[] }) => {
  console.log(technology);
  return (
    <div>
      <p className="text-2xl">Related Jobs</p>
      <p className="text-sm mt-3">2020 jobs live - 293 added today.</p>

      <div></div>
    </div>
  );
};

export default RelatedJobs;
