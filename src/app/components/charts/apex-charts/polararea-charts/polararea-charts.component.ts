import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MatCommonModule } from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from '../../../../@spk/apex-chart/apex-chart.component';

@Component({
  selector: 'app-polararea-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,ApexChartComponent],
  templateUrl: './polararea-charts.component.html',
  styleUrl: './polararea-charts.component.scss'
})
export class PolarareaChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
          type: 'polarArea',
          height: 300
      },
      stroke: {
          colors: ['#fff']
      },
      fill: {
          opacity: 0.8
      },
      legend: {
          position: 'bottom'
      },
      colors: ["#7961f5", "#f46ef4", "#fab632", "#28c8eb", "#fa4b42", "#85cc41", "#ff8100", "#28c8eb", "#be2aed"],
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
    };
    this.chartOptions1= {
      series: [42, 47, 52, 58, 65],
        chart: {
            height: 300,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6,
                color: "#845adf",
            }
        }
    };
  }
}
