import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const SideApexChart = () => {
  const options = {
    chart: {
      height: 200,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Weekly Stats:",
        data: [5, 15, 5, 10, 5],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [""],
    },
  };

  const chartOptions = {
    ...options,
    chart: {
      id: "chart",
      ...options.chart,
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#chart"),
      chartOptions
    );
    chart.render();
  }, []); 

  return (
    <div>
      
    </div>
  );
};

export default SideApexChart;
