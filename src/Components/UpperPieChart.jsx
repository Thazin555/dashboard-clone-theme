import React from "react";
import Chart from "react-apexcharts";

const UpperPieChart = () => {
  const series = [35, 40, 25];

  const options = {
    chart: {
      type: "donut",
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#5d87ff", "#ecf2ff", "#f9f9fd"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // This will make the hole 70% of the chart radius, leaving thinner slices
        },
      },
    },
  };

  return (
    <div className="w-[150px]">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default UpperPieChart;
