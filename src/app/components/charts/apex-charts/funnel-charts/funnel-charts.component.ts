import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

import { SharedModule } from '../../../../shared/sharedmodule';
import { ApexChartComponent } from "../../../../@spk/apex-chart/apex-chart.component";


@Component({
  selector: 'app-funnel-charts',
  standalone: true,
  imports: [SharedModule,ApexChartComponent],
  templateUrl: './funnel-charts.component.html',
  styleUrl: './funnel-charts.component.scss'
})
export class FunnelChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  @ViewChild("chart") chart!: ChartComponent;
 

  constructor() {
    this.chartOptions = {
      series: [
        {
            name: "Funnel Series",
            data: [1380, 1100, 990, 880, 740, 548, 330, 200],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
        },
    },
    colors: [
        'rgb(121, 97, 245)',
    ],
    dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
        },
        dropShadow: {
            enabled: true,
        },
    },
    title: {
        text: 'Recruitment Funnel',
        align: 'middle',
    },
    xaxis: {
        categories: [
            'Sourced',
            'Screened',
            'Assessed',
            'HR Interview',
            'Technical',
            'Verify',
            'Offered',
            'Hired',
        ],
    },
    legend: {
        show: false,
    },
    };
    this.chartOptions1 = {
      series: [
        {
          name: "",
          data: [200, 330, 548, 740, 880, 990, 1100, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: "80%",
          isFunnel: true
        }
      },
      colors: [
        'rgb(121, 97, 245)', '#f46ef4', '#fab632', '#28c8eb', '#fa4b42', '#85cc41', '#be2aed',
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        dropShadow: {
          enabled: true
        }
      },
      title: {
        text: "Pyramid Chart",
        align: "center"
      },
      xaxis: {
        categories: [
          "Sweets",
          "Processed Foods",
          "Healthy Fats",
          "Meat",
          "Beans & Legumes",
          "Dairy",
          "Fruits & Vegetables",
          "Grains"
        ]
      },
      legend: {
        show: false
      }
    };
  }
}
