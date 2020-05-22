import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BackendServerService } from 'src/app/services/backend-server.service';
import { Order } from '../main/new-item/new-item.page';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  items: Order[];
  itemTypes = [];
  filter = '';

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
            // this.closeStream();
          });
          // App is put in foreground
          this.platform.resume.subscribe(() => {
            // this.openStream();
          });
         }
      });
  }

  ngOnInit() {
    console.log('main.main: ngOnInit');

    // Actions organized on the network status:
    if (this.network.type === this.network.Connection.NONE) {
      this.localStorage.at(this.filter).then((resp) => {
        this.items = resp as Order[];
      });
    } else {
      // Asking the server for a list of resources
      const pItems = this.http.get(this.URI + '/my/' + this.filter).toPromise();
      pItems.then((resp) => {
        this.items = [resp as Order];
        this.localStorage.append(this.filter, this.items);
      });
    }

    // Watch network for a disconnection.
    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentOkToast('No internet connection.');
      this.localStorage.at(this.filter).then((resp) => {
        this.items = [resp as Order];
      });
    });

    // Watch network for a connection.
    const connectSubscription = this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.presentOkToast('Wifi network detected.');
        } else {
          this.presentOkToast(this.network.type + ' network detected.');
          this.localStorage.at(this.filter).then((resp) => {
            this.items = [resp as Order];
          });
        }
      }, 3000);
    });

  }

  filterItems() {
    console.log('main.main: filterItems');

    // Actions per refresh
    if (this.network.type === this.network.Connection.NONE) {

      // No internet connection
      this.presentOkToast('No internet connection.');
    } else if (this.network.type === 'wifi') {

      // Over Wi-fi
      const pBooks = this.http.get(this.URI + '/my/' + this.filter).toPromise();
      pBooks
      .then((resp) => {
        this.items = [resp as Order];
      })
      .catch((err) => {
        this.presentOkToast('No results');
      });
    } else {

      // Over 4G
      this.presentOkToast('Not connected to Local Area Network');
    }
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
      const pBooks = this.http.get(this.URI + '/my/' + this.filter).toPromise();
      pBooks
      .then((resp) => {
        this.items = [resp as Order];
        event.target.complete();
      })
      .catch((err) => {
        this.presentOkToast('Server down');
        event.target.complete();
      });
    } else {

      // Over 4G
      this.presentOkToast('Not connected to Local Area Network');
      event.target.complete();
    }

  }

  presentOkToast(myMessage: string) {
    // this.toast.create({
    //   message: myMessage,
    //   duration: 2000,
    //   buttons: [
    //     {
    //       text: 'Ok',
    //       role: 'cancel'
    //     }
    //   ]
    // }).then(t => { t.present(); });
  }

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
  }

}
