import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('barChart', {static: false}) barChart;

  currentSegment = 'live';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  avg_temp;
  run_pred = [];

  chart: GoogleChartInterface = {
    chartType: 'SteppedAreaChart',
    dataTable: [
      ['Hour', 'Distance prediction'],
      [ 0, 0],
    ],
    options: {
      title: 'Distance prediction for every strating hour in a day',
      hAxis: {title: 'Km'},
      vAxis: {title: 'Distance prediction'},
      legend: 'none'
    },
  };

  chart2: GoogleChartInterface = {
    chartType: 'SteppedAreaChart',
    dataTable: [
      ['Day', 'Probability'],
      [ 'Moday',      12],
      [ 'Tuesday',      7],
      [ 'Wednesday',     4],
      [ 'Thursday',      2],
      [ 'Friday',      3],
      [ 'Saturday',    14],
      [ 'Sunday',    16]
    ],
    options: {
      title: 'Probability to run on a daily basis',
      hAxis: {title: '', minValue: 0, maxValue: 15},
      vAxis: {title: 'Probability', minValue: 0, maxValue: 15},
      legend: 'none'
    },
  };

  chart3: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Year', 'Visitations', { role: 'style' } ],
      ['Ideal ambient light', 14, 'color: #76A7FA'],
      ['Actual ambient light', 22, 'opacity: 0.2'],
    ],
    options: {
      title: 'Comparison between ideal and actual data',
      hAxis: {title: '', minValue: 0, maxValue: 15},
      vAxis: {title: 'Value', minValue: 0, maxValue: 15},
      legend: 'none'
    },
  };

  chart4: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Year', 'Visitations', { role: 'style' } ],
      ['Ideal air pressure', 14, 'color: #76A7FA'],
      ['Actual air pressure', 16, 'opacity: 0.2'],
    ],
    options: {
      title: '',
      hAxis: {title: '', minValue: 0, maxValue: 15},
      vAxis: {title: 'Value', minValue: 0, maxValue: 15},
      legend: 'none'
    },
  };

  chart5: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Year', 'Visitations', { role: 'style' } ],
      ['Ideal temperature', 14, 'color: #76A7FA'],
      ['Actual temperature', 16, 'opacity: 0.2'],
    ],
    options: {
      title: '',
      hAxis: {title: '', minValue: 0, maxValue: 15},
      vAxis: {title: 'Value', minValue: 0, maxValue: 15},
      legend: 'none'
    },
  };

  constructor(
    public actionSheetController: ActionSheetController,
    private http: HttpClient) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    const chartDataPromise = this.http.get('http://161.35.76.247:4001/demo').toPromise();
    chartDataPromise.then((resp) => {
      console.log(resp);
      this.avg_temp = resp;
    });

    const chartDataPromise2 = this.http.get('http://161.35.76.247:4001/demo2').toPromise();
    chartDataPromise2.then((resp) => {
      console.log(resp);
      this.run_pred.push(['Hour', 'Km']);
      for (const pair of resp as []) {
        this.run_pred.push([pair[1], pair[0]]);
      }
      console.log(this.run_pred);
      this.chart.dataTable = this.run_pred;
      this.chart.component.draw();
    });
  }

  segmentChanged(event) {
    console.log(event);
  }

}
