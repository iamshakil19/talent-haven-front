const defaultColors = [
  "#1EB351",
  "#FFB84D",
  "#ec4561",
  "#38a4f8",
  "#3c4ccf",
  "#ff5722",
  "#a5978b",
  "#f5994e",
  "#f37774",
];

export interface IGenerateDonutChartOptions {
  dataSeries: number[];
  width: string | number;
  height: string | number;
  labels: string[];
  size: string | number;
  colors?: string[];
}

export const apexDonutChartOptions = ({
  dataSeries,
  labels,
  width,
  height,
  size,
  colors,
}: IGenerateDonutChartOptions) => {
  return {
    series: dataSeries,
    labels: labels,
    colors: colors || defaultColors,
    chart: {
      type: "donut",
      group: "social",
      width: width,
      height: height,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Jost, sans-serif",
      fontWeight: 400,
      markers: {
        width: 12,
        height: 12,
        radius: 100,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          minAngleToShowLabel: void 0,
        },
        donut: {
          size: size,
          labels: {
            show: !0,
            name: {
              show: !0,
              fontSize: "16px",
              fontFamily: "Jost, sans-serif",
              color: "#404040",
              offsetY: -10,
            },
            value: {
              show: !0,
              fontSize: "30px",
              fontFamily: "Jost, sans-serif",
              color: "black",
              fontWeight: "bold",
              offsetY: 10,
              formatter: function (e: any) {
                // return +e + "K"
                return +e;
              },
            },
            total: {
              show: !0,
              label: "Total",
              color: "#404040",
              fontFamily: "Jost, sans-serif",
              formatter: function (e: any) {
                const totalValue = e.globals.seriesTotals.reduce(
                  (e: any, t: any) => e + t,
                  0
                );
                return Number(totalValue?.toFixed(2));
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1399,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };
};

export interface IGenerateChartOptions {
  categories: string[];
  data: any;
  showToolbox: boolean;
  colors?: string[];
  showLegend?: boolean;
  legendPosition?: string;
}

export function generateChartOptions({
  categories,
  data,
  showToolbox = false,
  colors,
  showLegend = true,
  legendPosition,
}: IGenerateChartOptions) {
  return {
    series: data,
    chart: {
      //   type: type,
      toolbar: {
        show: showToolbox,
      },
    },
    labels: categories,
    xaxis: {
      categories: categories,
      position: "bottom", // bottom | top
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: colors || defaultColors,

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          //   return " " + val + " BDT";
          return val;
        },
      },
    },

    legend: {
      show: showLegend,
      position: legendPosition || "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Jost, sans-serif",
      fontWeight: 400,
      markers: {
        width: 12,
        height: 12,
        radius: 100,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },

    noData: {
      text: "No Data Found",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#aab7b8",
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },

    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: 400,
          },

          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },

          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },

          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
}
