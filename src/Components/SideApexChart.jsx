import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const SideApexChart = () => {
  const options = {
    chart: {
      height: 150,
      type: "area",
      toolbar: {
        show: false // Hide the toolbar
      },
      zoom: {
        enabled: false,//hide xoom
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      row: {
        colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
      },
      column: {
        colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
      },
      yaxis:{
        lines:{
          show:false
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, 
    },
    tooltip:{
      theme:"dark"//hover background color
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
    stroke: {
      curve: "smooth",
      colors: ["#5d87ff"], // Set the stroke (line) color here
      width: 2,
    },
    xaxis: {
      categories: [""],
    },
    yaxis:{
      labels: {
        show: false // Hide y-axis number labels
      }
   
    }
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
    <div id="chart" className=" max-w-[600px] mx-auto my-2  "></div>
  );
};

export default SideApexChart;
