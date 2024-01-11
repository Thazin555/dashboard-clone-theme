import React from "react";
import Chart from "react-apexcharts";

const HomeUpperAreaChart = () => {
  const series = [
    {
      name: "Sales",
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  const options = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      height: 60,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      colors: ["#49beff"],
    },
    stroke: {
      curve: "smooth",
      colors: ["#49beff"], // Set the stroke (line) color here
      width: 2,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => "",
        },
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="area" height={60} />
    </div>
  );
};

export default HomeUpperAreaChart;
