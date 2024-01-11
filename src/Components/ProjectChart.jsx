import React from "react";
import ReactApexChart from "react-apexcharts";

class ProjectChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: [4, 10, 9, 7, 10, 9,10,11,8,10],
        },
      ],
      options: {
        chart: {
          width:'100%',
          height: 400,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e);
            },
          },
          toolbar: {
            show: false // Hide the toolbar
          },
        },
        tooltip:{
          theme:"dark"
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
        colors: [
          "#5d87ff","#5d87ff","#5d87ff","#5d87ff","#5d87ff","#5d87ff"
        ],
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: "40%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },

        xaxis: {
          categories: ["", "", "", "", "", ""],
          labels: {
            style: {
              colors: [
                "#64748b",
                "#64748b",
                "#64748b",
                "#64748b",
                "#64748b",
                "#64748b",
              ],
              fontSize: "13px",
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={150}
        />
      </div>
    );
  }
}

export default ProjectChart;
