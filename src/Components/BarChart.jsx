// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const chartData = {
    labels: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08"],
    datasets: [
      {
        barThickness: 10,
        label: "Earning this month",
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
        backgroundColor: "#7699ff",
        stack: "total",
        borderRadius: 12,
      },
      {
        barThickness: 10,
        label:"Expense this month",
        data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
        backgroundColor: "#69c8ff",
        stack: "total",
        borderRadius: 12,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={{
        scales: {
          x: {
            grid: {
              display: false, // Hide vertical grid lines
            },
            ticks: {
              display: true, // Show ticks on the x-axis
              color: "#b2b5bf",
            },
          },
          y: {
            grid: {
              display: true,
              drawBorder: false, // Hide vertical grid lines
              drawTicks: false, // Hide tick marks
              tickLength: 1, // Hide tick length
              borderDash: [5, 5], // Set dash pattern for horizontal grid lines
            },
            ticks: {
              stepSize: 2.5, // Ticks at 0, 2.5, 5.0, ...
              color: "#b2b5bf",
            },
            min: -5.0,
            max: 5.0,
            beginAtZero: false,
          },
        },
        plugins: {
          legend: {
            display: false, // Disable the legend plugin
          },
          tooltip: {
            callbacks: {
              labelColor: function (context) {
                return {
                  backgroundColor: context.dataset.backgroundColor,
                  borderWidth: 2,
                  borderDash: [2, 2],
                  borderRadius: 6,
                };
              },
            },
          },
        },
        maintainAspectRatio: false, // Allow the chart to not maintain aspect ratio
        responsive: true, // Make the chart responsive
      }}
    />
  );
};

export default BarChart;
