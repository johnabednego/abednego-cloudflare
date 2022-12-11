
export const Combo = (title,total_traffic, http,categories) => {
    let options = {
        series: [{
        name: 'Total Traffic',
        type: 'column',
        data: total_traffic
      }, {
        name: 'Http Traffic',
        type: 'column',
        data:http
      },],
        chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: title+" Chart",
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: categories
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Total Traffic Change",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Total Traffic',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
          },
          title: {
            text: "Http Traffic Change",
            style: {
              color: '#00E396',
            }
          },
        },
      ],
      tooltip: {
        enabled: true,
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
      };
      
      return options;
}
