import DashboardBreadcrumb from "@/components/shared/DashboardBreadcrumb";

import "react-quill/dist/quill.snow.css";

import "./AddNewJob.css";

import AddNewJobForm from "./AddNewJobForm";
import { config } from "./AddNewJob.config";

const AddNewJob = () => {
  return (
    <div>
      <DashboardBreadcrumb />

      <div className="relative">
        <div className="flex items-center justify-center py-5">
          <div className=" grid gap-3 w-full max-w-6xl lg:border p-5 rounded-md bg-gradient-to-br from-[#f2f5fb81] to-[#eaf0fb7e]">
            <div className="grid gap-2 ">
              <h1 className="text-xl font-bold text-primary">
                {config.staticText.title}
              </h1>
              <p className="text-muted-foreground text-sm text-wrap">
                {config.staticText.subTitle}
              </p>
            </div>
            <AddNewJobForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewJob;
