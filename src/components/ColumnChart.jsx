export const ColumnChart = (title, percentage, categories) => {
  let options = {
    series: [{
      name:"Attack",
      type: 'column',
      data: percentage
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: title + " Chart",
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    xaxis: {
      categories: categories,
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
    },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }

    }
          
     return options;
  }

