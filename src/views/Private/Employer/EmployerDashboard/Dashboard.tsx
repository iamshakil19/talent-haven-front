import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { useGetAnalyticsQuery } from "@/redux/features/job/jobApi";
import {
  IGenerateChartOptions,
  generateChartOptions,
} from "@/utils/generateChartOptions";
import moment from "moment";
import Chart from "react-apexcharts";
import Stats from "./components/Stats";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetAnalyticsQuery({});

  const { data: analytics } = data?.data || {};

  console.log(analytics);

  const { totalJob, activeJob, blockJob, hiredJob, jobsByMonth } =
    analytics || {};

  const formattedDates = jobsByMonth?.dates.map((date: string) =>
    moment(date).format("ll")
  );

  const chartOptionsParams: IGenerateChartOptions = {
    categories: formattedDates,
    data: [4, 6, 3, 7],
    showToolbox: false,
    colors: [],
    showLegend: true,
    legendPosition: "bottom",
  };

  const chartOptions = generateChartOptions(chartOptionsParams);

  const chartSeries = [
    {
      name: "Month",
      data: jobsByMonth?.totalJobs,
    },
  ];

  let content = null;

  if (isLoading) {
    content = <Loading loading={true} type="fullCover" />;
  } else if (!isLoading && isError) {
    content = <Error message={"There was and error"} />;
  } else if (!isLoading && !isError) {
    content = (
      <div className="w-full">
        <Stats
          totalJob={totalJob}
          activeJob={activeJob}
          blockJob={blockJob}
          hiredJob={hiredJob}
        />

        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 shadow-md shadow-primary-gray/10 p-2 rounded-md">
            <p className="text-primary-gray/90 font-semibold p-2">
              Job By Month
            </p>
            <Chart
              options={chartOptions as any}
              series={chartSeries}
              type="area"
              width="100%"
              height={400}
            />
          </div>
          <div className="col-span-1 shadow-md shadow-primary-gray/10 p-2 rounded-md">
            <p className="text-primary-gray/90 font-semibold p-2">
              Job By Category
            </p>

            <Chart
              series={[44, 55, 41, 17, 15]}
              options={{
                chart: {
                  type: "donut",
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
              }}
              type="donut"
              width="100%"
              height={400}
            />
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Dashboard;
