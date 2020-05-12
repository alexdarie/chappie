import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { BackendServerService } from '../../../services/backend-server.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Order } from '../../main/new-item/new-item.page';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  loadedItem: Order = {
    id: -1,
    table: '',
    details: '',
    status: '',
    time: null,
    type: ''
  };
  URI = this.backend.URI;
  showProgressBar = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private network: Network,
    private http: HttpClient,
    private backend: BackendServerService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/tabs/tab2']);
        return;
      }

      const itemId = Number(paramMap.get('id'));
      const promise = this.http.get(this.URI + '/order/' + itemId).toPromise();
      promise.then((resp) => {
        this.loadedItem = resp as Order;
      });
    });
  }

  onUpdate() {
    // Actions organized on the network status:
    if (this.network.type === this.network.Connection.NONE) {
      this.presentOkToast('No internet connection.');
      // offline actions
    } else {
      this.showProgressBar = true;
      const promise = this.http.post(this.URI + '/status', this.loadedItem).toPromise();
      promise.then((resp) => {
        console.log('main.item-details: response onUpdate: ', resp);
        this.localStorage.at('recorded').then(
          (items) => {
            items = items.filter(item => item.id !== (resp as Order).id);
            this.localStorage.append('recorded', items);
            this.router.navigate(['/tabs/tab2']);
          }
        );
      })
      .catch((err) => {
        this.presentOkToast(err.message);
      });
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

}
