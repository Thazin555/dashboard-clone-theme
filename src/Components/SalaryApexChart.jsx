import React from "react";
import ReactApexChart from "react-apexcharts";

class SalaryApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        
        {
            name:'',
          data: [20, 15, 30, 25, 10, 15],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false // Hide the toolbar
          },
          sparkline: {
            enabled: true,
          },
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e);
            },
          },
        },
        grid: {
            row: {
              colors: ['#ffffff', '#ffffff', '#ffffff','#ffffff']
            },
            column: {
              colors: ['#ffffff', '#ffffff', '#ffffff','#ffffff']
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
          function ({ value, seriesIndex, w }) {
            if (value > 26) {
              return "#5d87ff";
            } else {
              return "#d7e8f1";
            }
          },
        ],
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "45%",
            distributed: true,
          },
        },
        tooltip:{
          theme:"dark"
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
          categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
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
      <div >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={280}
        />
      </div>
    );
  }
}

export default SalaryApexChart;
