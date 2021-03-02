import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Skillliesline extends Component {

  constructor(props) {
    super(props);

   this.state = {
          
            series: [
              {
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
              },
              //{
              //  name: "Low - 2013",
              //  data: [12, 11, 14, 18, 17, 13, 13]
              //}
            ],
            options: {
              chart: {
                height: '30%',
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#77B6EA', '#545454'],
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'smooth'
              },
            //  title: {
            //  text: 'Average High & Low Temperature',
            //    align: 'left'
            //  },
              grid: {
                borderColor: '#e7e7e7',
                row: {
                  colors: ['transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              markers: {
                size: 1
              },
              xaxis: {
              labels: {show: false}
             //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
             //   title: {
             //     text: 'Month'
             //   }
              },
              yaxis: {
              show: false,
             //   title: {
             //     text: 'Temperature'
             //   },
             //   min: 5,
             //   max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          };
          
}

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
}

export default Skillliesline;