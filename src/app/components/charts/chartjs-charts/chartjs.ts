import { ChartConfiguration, ChartType, Color } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45'],
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(84, 109, 254)',
      borderColor: 'rgb(84, 109, 254)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
  labels: ['January', 'Febraury', 'March', 'April', 'May', 'June'],
};

//BarChart1
export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: '#77778e',
      },
      grid: {
        display: true,
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [DataLabelsPlugin];
export let barChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
        'rgba(84, 109, 254, 0.2)',
        'rgba(244, 110, 244, 0.2)',
        'rgba(255, 93, 159, 0.2)',
        'rgba(255, 93, 159, 0.2)',
        'rgba(250, 75, 66, 0.2)',
        'rgba(250, 182, 50, 0.2)',
        'rgba(10, 10, 10, 0.2)'
    ],
    borderColor: [ 
        'rgb(84, 109, 254)',
        'rgb(244, 110, 244)',
        'rgb(255, 93, 159)',
        'rgb(255, 93, 159)',
        'rgb(250, 75, 66)',
        'rgb(250, 182, 50)',
        'rgb(10, 10, 10)'
    ],
    borderWidth: 1
}],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};

export let barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};

export let barChart2Type: ChartType = 'bar';
export let barChart2Legend = true;
export let barChart2Plugins = [];
export const barChart2Data: ChartConfiguration['data'] = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(84, 109, 254)',
    backgroundColor: 'rgba(84, 109, 254, 0.2)'
}, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(244, 110, 244)'
}]
};
// export let barChart2Data: ChartConfiguration['data'] = {
//   datasets: [
//     {
//       label: 'Data1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       borderColor: 'rgb(84, 109, 254)',
//       borderWidth: 0,
//       backgroundColor: 'rgb(84, 109, 254)',
//     },
//     {
//       label: 'Data2',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       borderColor: '#53caed',
//       borderWidth: 0,
//       backgroundColor: '#53caed',
//     },
//   ],
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// };

//Area Chart
export let AreaChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
};
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [22, 44, 67, 43, 76, 45, 12],
      borderColor: 'rgba(113, 76, 190, 0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(113, 76, 190, 0.5)',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Data2',
      data: [16, 32, 18, 26, 42, 33, 44],
      borderColor: 'rgba(235, 111, 51 ,0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(	235, 111, 51, 0.7)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
};

//DoughNut Chart and Pie chart data
export const data2 = {
  labels: ['Cornflower Blue',  'Orchid',
  'Hot Pink'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(84, 109, 254)',
        'rgb(227, 84, 212)',
        'rgb(255, 93, 159)'
      ],
      hoverOffset: 4,
    },
  ],
};
export const config3 = {
  type: 'pie',
  data: data2,
};
export let PieChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['rgb(84, 109, 254)', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
};
export let PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#77778e',
      },
    },
  },
  // animation: {
  //   animateScale: true,
  //   animateRotate: true,
  // },
};
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

//Radar Chart
export let radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: "rgba(171, 167, 167, 0.2)", // Change grid line color
      },
      angleLines: {
        color: "rgba(171, 167, 167, 0.5)", // Change radial axis (spoke) line color
      },
      ticks: {
        color: "rgba(171, 167, 167, 0.9)", // Change tick color
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
  
};

export let radarChartType: ChartType = 'radar';

export const radarChartData: ChartConfiguration['data'] = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(84, 109, 254, 0.2)',
    borderColor: 'rgb(84, 109, 254)',
    pointBackgroundColor: 'rgb(84, 109, 254)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(84, 109, 254)'
}, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(244, 110, 244, 0.2)',
    borderColor: 'rgb(244, 110, 244)',
    pointBackgroundColor: 'rgb(244, 110, 244)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(244, 110, 244)'
}]
};

//Polar Chart
export let polarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: "rgba(171, 167, 167, 0.2)", // Change grid line color
      },
      angleLines: {
        color: "rgba(171, 167, 167, 0.5)", // Change radial axis (spoke) line color
      },
      ticks: {
        color: "rgba(171, 167, 167, 0.9)", // Change tick color
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
};
export let polarChartType: ChartType = 'polarArea';
export const polarChartData: ChartConfiguration['data'] = {
  labels: [  'Cornflower Blue',
  'Green',
  'Hot Pink',
  'Silver',
  'Orchid'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
                'rgb(84, 109, 254)',
                'rgb(75, 192, 192)',
                'rgb(255, 93, 159)',
                'rgb(201, 203, 207)',
                'rgb(227, 84, 212)'
      ],
    },
  ],
};
// export let polarChartData: ChartConfiguration['data'] = {
//   datasets: [
//     {
//       data: [18, 15, 9, 6, 19],
//       backgroundColor: ['rgb(84, 109, 254)', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
//       hoverBackgroundColor: [
//         'rgb(84, 109, 254)',
//         '#53caed',
//         '#01b8ff',
//         '#f16d75',
//         '#29ccbb',
//       ],
//       borderColor: 'transparent',
//     },
//   ],
//   labels: ['Data1', 'Data2', 'Data3', 'Data4'],
// };

// bubble chart

export let bubblechartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: 'rgb(84, 109, 254)',
      },
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      }, 
     },
     y:{
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      }, 
    }
}
}
export let bubblechartType: ChartType = 'bubble';

export let bubblechartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'First Dataset',
      data: [
        {
          x: 20,
          y: 30,
          r: 15,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
      ],
      backgroundColor: 'rgb(84, 109, 254)',
    },
  ],
};
// scatterd chart
export let ScatterchartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      }, 
     },
     y:{
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      }, 
    }
    },
};

export let ScatterchartType: ChartType = 'bubble';

export let scatterchartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: [
        {
          x: -10,
          y: 0,
        },
        {
          x: 0,
          y: 10,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 0.5,
          y: 5.5,
        },
      ],
      pointBorderColor: 'rgb(84, 109, 254)',
      borderColor: 'rgb(84, 109, 254)',
      backgroundColor: 'rgb(84, 109, 254)',
    },
  ],
  labels: ['First Dataset'],
};
