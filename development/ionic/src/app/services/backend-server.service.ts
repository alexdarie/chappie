import { Injectable } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';

@Injectable({
  providedIn: 'root'
})
export class BackendServerService {

  port = 4000;
  myIPOverNetwork = '161.35.76.247';
  // myIPOverNetwork = '192.168.0.192';
  // myIPOverNetwork = 'localhost';
  URI = 'http://' + this.myIPOverNetwork + ':' + this.port;
  ws = new $WebSocket('ws://' + this.myIPOverNetwork + ':' + this.port);

  subscription = null;
  constructor() {}

  messageHandler(msg) {
    console.log(msg);
    msg.ack();
  }
}
