import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";

interface IStatsCard {
  hiredJob: number;
  blockJob: number;
  activeJob: number;
  totalJob: number;
}

const Stats = ({ hiredJob, blockJob, activeJob, totalJob }: IStatsCard) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-7">
      {/* For Total */}
      <div className="bg-white dark:bg-muted/80 shadow-md rounded-md p-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-primary-gray">Total Job</p>
          <p className="mt-1">{totalJob}</p>
        </div>
        <p className="h-12 w-12 rounded-full bg-secondary-blue flex items-center justify-center">
          <span className="h-9 w-9 rounded-full bg-primary-blue flex items-center justify-center text-background">
            <IoDocumentTextOutline size={20} />
          </span>
        </p>
      </div>
      {/* For Total Active */}
      <div className="bg-white dark:bg-muted/80 shadow-md rounded-md p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-primary-gray">Active Job</p>
          <p className="mt-1">{activeJob}</p>
        </div>
        <p className="h-12 w-12 rounded-full bg-secondary-green flex items-center justify-center text-primary-white">
          <span className="h-9 w-9 rounded-full bg-primary-green flex items-center justify-center text-background">
            <IoDocumentTextOutline size={20} />
          </span>
        </p>
      </div>

      {/* For Total Block */}
      <div className="bg-white dark:bg-muted/80 shadow-md rounded-md p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-primary-gray">Block Job</p>
          <p className="mt-1">{blockJob}</p>
        </div>
        <p className="h-12 w-12 rounded-full bg-secondary-red flex items-center justify-center text-primary-white">
          <span className="h-9 w-9 rounded-full bg-primary-red flex items-center justify-center text-background">
            <IoDocumentTextOutline size={20} />
          </span>
        </p>
      </div>

      {/* For Total Hired */}
      <div className="bg-white dark:bg-muted/80 shadow-md rounded-md p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-primary-gray">Total Hired</p>
          <p className="mt-1">{hiredJob}</p>
        </div>
        <p className="h-12 w-12 rounded-full bg-secondary-green flex items-center justify-center text-primary-white">
          <span className="h-9 w-9 rounded-full bg-primary-green flex items-center justify-center text-background">
            <FaRegHandshake size={20} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Stats;
