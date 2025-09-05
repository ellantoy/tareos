import { Component, NgModule } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { SpkEchartsComponent } from '../../../@spk/spk-echarts/spk-echarts.component';
import { barBgChart, barChart, barChartNegativeChart, barLableChart, basicAreaChart, basicBarChart, bubbleChart, candlestickChart, doughutChart, echartHorizontalLineBarChart, funnelChart, graphChart, guageChart, horizontalBarChart, horizontalStackedBarChart, pieChart, radarChart, scatterChart, singleBarChart, smoothlinechart, stackedAreaChart, stackedlineChart, steplineChart, treemapChart, waterFallChart } from '../../../shared/data/echart.data';
import { SharedModule } from '../../../shared/sharedmodule';
import { MatCommonModule } from '@angular/material/core';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import * as echarts from 'echarts';
@Component({
  selector: 'app-echart-charts',
  standalone: true,
  imports: [MatCommonModule, SharedModule, SpkEchartsComponent],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },
  ],
  templateUrl: './echart-charts.component.html',
  styleUrl: './echart-charts.component.scss',
})
export class EchartChartsComponent {
  public echartHorizontalLineBarChart = echartHorizontalLineBarChart;
  public smoothlinechart = smoothlinechart;
  public basicAreaChart = basicAreaChart;
  public stackedlineChart = stackedlineChart;
  public stackedAreaChart = stackedAreaChart;
  public steplineChart = steplineChart;
  public basicBarChart = basicBarChart;
  public barBgChart = barBgChart;
  public singleBarChart = singleBarChart;
  public waterFallChart = waterFallChart;
  public barChartNegativeChart = barChartNegativeChart;
  public barLableChart = barLableChart;
  public horizontalBarChart = horizontalBarChart;
  public horizontalStackedBarChart = horizontalStackedBarChart;
  public pieChart = pieChart;
  public doughutChart = doughutChart;
  public scatterChart = scatterChart;
  public bubbleChart = bubbleChart;
  public radarChart = radarChart;
  public candlestickChart = candlestickChart;
  public treemapChart = treemapChart;
  public funnelChart = funnelChart;
  public guageChart = guageChart;
  public graphChart = graphChart;
  public barChart = barChart;
 
  options!: EChartsOption;
 
  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }

}
type DataT = {
name: string;
value: [string, number];

}
