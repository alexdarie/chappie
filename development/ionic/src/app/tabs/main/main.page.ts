import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BackendServerService } from 'src/app/services/backend-server.service';
import { Order } from './new-item/new-item.page';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  items: Order[];
  itemTypes = [];
  filter = null;

  curentlySelectedM = 'temp';
  chart: GoogleChartInterface = {
    chartType: 'LineChart',
    dataTable: [
      ['Hour', 'Value'],
      ['0', 0]
    ],
    options: {
      curveType: 'function',
      legend: 'none',
    },
  };

  measurement = {
    temp: {
      name: 'Temperature histogram',
      value: 0,
      unit: 'Celsius',
      chart: {
        chartType: 'LineChart',
        dataTable: [
          ['Hour', 'Value'],
          ['0', 0]
        ],
        options: {
          curveType: 'function',
          legend: 'none'
        },
      },
      settings: [
        {
          icon: 'eye',
          title: 'Celsius',
          description: 'Ambiental temperature',
          code: 1,
        },
        {
          icon: 'eye-off',
          title: 'Silent',
          description: 'Display will be turned off',
          code: 5
        }
    ]},
    aprs: {
      name: 'Air pressure histogram',
      value: 0,
      unit: 'hPa',
      chart: {
        chartType: 'LineChart',
        dataTable: [
          ['Hour', 'Value'],
          ['0', 0]
        ],
        options: {
          curveType: 'function',
          legend: 'none'
        },
      },
      settings: [
      {
        icon: 'eye',
        title: 'hPa',
        description: 'Air pressure',
        code: 2
      },
      {
        icon: 'eye-off',
        title: 'Silent',
        description: 'Display will be turned off',
        code: 5
      }
    ]},
    lght: {
      name: 'Light histogram',
      value: 0,
      unit: 'Lumens',
      chart: {
        chartType: 'LineChart',
        dataTable: [
          ['Hour', 'Value'],
          ['0', 0]
        ],
        options: {
          curveType: 'function',
          legend: 'none'
        },
      },
      settings: [
      {
        icon: 'eye',
        title: 'Lumens',
        description: 'Ambietal light intensity',
        code: 3
      },
      {
        icon: 'eye-off',
        title: 'Silent',
        description: 'Display will be turned off',
        code: 5
      }
    ]},
    colr: {
      name: 'Color',
      value: '',
      unit: 'Real time RGBC',
      chart: {
        chartType: 'ColumnChart',
        dataTable: [
          ['Value', 'Density', { role: 'style' }],
          ['Red',  0, '#eb4034'],
          ['Green', 0, '#eb4034'],
          ['Blue',  0, '#eb4034'],
          ['Clear', 0, 'gray'],
        ],
        options: {
          legend: 'none'
        },
      },
      settings: [
      {
        icon: 'eye',
        title: 'RGB',
        description: 'Ambiental color',
        code: 4
      },
      {
        icon: 'eye-off',
        title: 'Silent',
        description: 'Display will be turned off',
        code: 5
      }
    ]},
    all: {
      name: 'Histogram',
      value: '',
      unit: 'last update',
      chart: {
        chartType: 'LineChart',
        dataTable: [
          ['Hour', 'Temperature', 'Light', 'Pressure'],
          ['0', 0, 0, 0]
        ],
        options: {
          curveType: 'function',
          legend: {
            position: 'bottom'
          }
        },
      },
      settings: [
      {
        icon: 'eye',
        title: 'Alternative',
        description: 'Alternattive view',
        code: 0
      },
      {
        icon: 'eye-off',
        title: 'Silent',
        description: 'Display will be turned off',
        code: 5
      }
    ]}
  };
  measurementName = this.measurement.temp.name;
  measurementValue = this.measurement.temp.value;
  measurementUnit = this.measurement.temp.unit;
  measurementDisplayFaces = this.measurement.temp;
  currentDisplay = this.measurement.temp.settings[0].title;
  savedDisplay = [];

  temperature = [];
  light = [];
  airPressure = [];
  allValues = [];

  URI = this.backend.URI;
  ws = this.backend.ws;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private network: Network,
    private toast: ToastController,
    private backend: BackendServerService,
    private platform: Platform) {
      platform.ready().then(() => {
        if (platform.is('cordova')) {
          // App is put in background
          this.platform.pause.subscribe(() => {
            this.closeStream();
          });
          // App is put in foreground
          this.platform.resume.subscribe(() => {
            this.openStream();
          });
         }
      });

      const chartDataPromise = this.http.get('http://161.35.76.247:4001/weather-graph').toPromise();
      chartDataPromise.then((resp) => {
        console.log(resp['data']);
        this.temperature = [['Hour', 'Value']];
        this.light = [['Hour', 'Value']];
        this.airPressure = [['Hour', 'Value']];
        this.allValues = [['Hour', 'Temperature', 'Light', 'Pressure']];
        for (const event of resp['data']) {
          this.temperature.push([new Date(event['event_time']).toISOString(), event['temperature']]);
          this.light.push([new Date(event['event_time']).toISOString(), event['light']]);
          this.airPressure.push([new Date(event['event_time']).toISOString(), event['air_pressure']]);
          this.allValues.push(
            [new Date(event['event_time']).toISOString(), event['temperature'] / 20, event['light'] / 1600, event['air_pressure'] / 970]
          );
        }
        this.measurement.temp.chart.dataTable = this.temperature;
        this.measurement.aprs.chart.dataTable = this.airPressure;
        this.measurement.lght.chart.dataTable = this.light;
        this.measurement.all.chart.dataTable = this.allValues;
        const dd = new Date(this.allValues[this.allValues.length - 1][0]);
        this.measurement.all.value = dd.toISOString().substr(11, 5);
        this.chart.dataTable = this.measurement[this.curentlySelectedM].chart.dataTable;
        this.chart.chartType = this.measurement[this.curentlySelectedM].chart.chartType;
        this.chart.options = this.measurement[this.curentlySelectedM].chart.options;
        this.chart.component.draw();
      });
  }

  ngOnInit() {
    console.log('main.main: ngOnInit');

    this.openStream();

    this.localStorage.at('savedDisplay').then((resp) => {
      console.log('here2');
      console.log(resp);
      if (resp != null) {
        this.savedDisplay = resp;
        this.currentDisplay = resp[0][0];
      } else {
        this.savedDisplay = [this.measurement.temp.settings[0].title, this.measurement.temp.settings[0].code];
      }
    });

    // Actions organized on the network status:
    if (this.network.type === this.network.Connection.NONE) {
      this.localStorage.get().then((resp) => {
        this.items = resp as Order[];
      });
    } else {
      // Asking the server for a list of resources
      // const pItems = this.http.get(this.URI + '/orders').toPromise();
      // pItems.then((resp) => {
      //   this.localStorage.set(this.items);
      // });
    }

    // Watch network for a disconnection.
    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentOkToast('No internet connection.');
      this.localStorage.get().then((resp) => {
        this.items = resp as Order[];
      });
    });

    // Watch network for a connection.
    const connectSubscription = this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.presentOkToast('Wifi network detected.');
        } else {
          this.presentOkToast(this.network.type + ' network detected.');
          this.localStorage.get().then((resp) => {
            this.items = resp as Order[];
          });
        }
      }, 3000);
    });
  }

  public doRefresh(event) {

    console.log('main.main: doRefresh');

    // Actions per refresh
    if (this.network.type === this.network.Connection.NONE) {

      // No internet connection
      this.presentOkToast('No internet connection.');
      event.target.complete();
    } else if (this.network.type === 'wifi') {

      // Over Wi-fi
      // const pBooks = this.http.get(this.URI + '/orders').toPromise();
      // pBooks
      // .then((resp) => {
      //   this.items = resp as Order[];
      //   event.target.complete();
      // })
      // .catch((err) => {
      //   this.presentOkToast('Server down');
      //   event.target.complete();
      // });
    } else {

      // Over 4G
      this.presentOkToast('Not connected to Local Area Network');
      event.target.complete();
    }

  }

  presentOkToast(myMessage: string) {
    this.toast.create({
      message: myMessage,
      duration: 2000,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    }).then(t => { t.present(); });
  }

  ionViewWillEnter() {
    this.localStorage.get().then((resp) => {
      this.items = resp as Order[];
    });
  }

  ionViewWillLeave() {
  }

  openStream() {
    // this.presentOkToast('Listening on port: ' + this.backend.port);
    this.ws.getDataStream().subscribe(
      (msg) => {
        msg = JSON.parse(msg.data);
        console.log(msg);
        if (msg.temperature != null) {
          this.measurement.temp.value = msg.temperature;
          this.measurement.aprs.value = msg.air_pressure;
          this.measurement.lght.value = msg.light;
          this.measurementValue = this.measurement[this.curentlySelectedM].value;
          this.measurement.colr.value = 'rgb(' + msg.color.red + ', ' + msg.color.green +  ', ' + msg.color.blue + ')';
          this.measurement.colr.chart.dataTable = [
            ['Value', 'Density', { role: 'style' }],
            ['Red',  msg.color.red, 'lightgray'],
            ['Green', msg.color.green, 'lightgray'],
            ['Blue',  msg.color.blue, 'lightgray'],
            ['Clear', msg.color.clear, 'lightgray'],
          ];
          if (this.curentlySelectedM === 'colr') {
            this.chart.dataTable = this.measurement.colr.chart.dataTable;
            this.chart.chartType = this.measurement.colr.chart.chartType;
            this.chart.options = this.measurement.colr.chart.options;
            this.chart.component.draw();
          }
          this.localStorage.at('recorded').then((resp) => {
            // const localItems = resp as Order[];
            // localItems.push(msg);
            // this.localStorage.append('recorded', localItems);
            // this.presentOkToast('New Order: ' + msg);
          });
        }
      },
      (msg) => {
          console.log('main.main: openStream: error', msg);
      },
      () => {
          console.log('main.main: openStream: complete');
      }
    );
  }

  closeStream() {
    console.log('main.main: closeStream');
    this.presentOkToast('Stop listening on port: ' + this.backend.port);
    this.ws.close(false);
  }

  changeMeasurement(x) {
    this.curentlySelectedM = x;
    this.measurementName = this.measurement[x].name;
    this.measurementValue = this.measurement[x].value;
    this.measurementUnit = this.measurement[x].unit;
    this.measurementDisplayFaces = this.measurement[x];
    this.chart.dataTable = this.measurement[x].chart.dataTable;
    this.chart.chartType = this.measurement[x].chart.chartType;
    this.chart.options = this.measurement[x].chart.options;
    this.chart.component.draw();
    console.log(this.savedDisplay[0]);
    this.currentDisplay = this.savedDisplay[0].toString();
  }

  saveDisplayOption(title, code) {
    this.savedDisplay = [title, code];
    this.localStorage.append('savedDisplay', [this.savedDisplay]);
    this.backend.ws.send(JSON.stringify({displayCode: code})).subscribe(
      (msg) => {
          console.log('next', msg.data);
      },
      (msg) => {
          console.log('error', msg);
          if (msg.includes('Socket connection has been closed')) {
            this.presentOkToast('Weather device cannot be reached');
          } else {
            this.presentOkToast('Cannot connect to weather device');
          }
      },
      () => {
          console.log('complete');
      }
    );
  }

}
