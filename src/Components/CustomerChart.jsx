import React from "react";
import ReactApexChart from "react-apexcharts";

class CustomerChart extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
        series: [{
            name: "",
            data: [30,25,35,20,40]
          }],
      options: {
        chart: {
          type: "area",
          
          height: 50,
          // contextMenu: {
          //   show: false // Hide the context menu
          // },
          toolbar: {
            show: false // Hide the toolbar
          },
          sparkline: {
            enabled: true,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#49beff"], // Set the stroke (line) color here
          width: 2,
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
        yaxis: {
            // categories: ["", "", "", "", "", ""],
            labels: {
              show: false // Hide y-axis number labels
            }
         
          // axisBorder: {
          //   show: false,
          // },
          // axisTicks: {
          //   show: false,
          // },
        },
        legend: {
          show:false,
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
          type="area"
          
          height={90}
        />
      </div>
    );
  }
}

export default CustomerChart;
