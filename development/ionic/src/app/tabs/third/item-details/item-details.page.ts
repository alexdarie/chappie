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
        this.router.navigate(['/tabs/tab3']);
        return;
      }

      const itemId = Number(paramMap.get('id'));
      this.loadedItem.id = itemId;
    });
  }

  onUpdate() {
    // Actions organized on the network status:
    if (this.network.type === this.network.Connection.NONE) {
      this.presentOkToast('No internet connection.');
      // offline actions
    } else {
      this.showProgressBar = true;
      const promise = this.http.post(this.URI + '/height', this.loadedItem).toPromise();
      promise.then((resp) => {
        console.log('main.item-details: response onUpdate: ', resp);
        this.localStorage.at((resp as Order).type).then(
          (items) => {
            items.forEach(element => {
              if (element.id === (resp as Order).id) {
                // element.height = (resp as Order).height;
                this.presentOkToast('Succesfully updated.');
              }
            });
            this.localStorage.append((resp as Order).type, items);
            this.router.navigate(['/tabs/tab3']);
          }
        );
      })
      .catch((err) => {
        this.presentOkToast(err.message);
      });
    }
  }

  onRemove() {
    // Actions organized on the network status:
    if (this.network.type === this.network.Connection.NONE) {
      this.presentOkToast('No internet connection.');
      // offline actions
    } else {
      this.showProgressBar = true;
      const promise = this.http.delete(this.URI + '/Order/' + this.loadedItem.id).toPromise();
      promise.then((resp) => {
        console.log('main.item-details: response onRemove: ', resp);
        this.localStorage.at((resp as Order).type).then(
          (items) => {
            items = items.filter(item => item.id !== (resp as Order).id);
            this.localStorage.append((resp as Order).type, items);
            setTimeout(() => {this.router.navigate(['/tabs/tab3']); }, 1000);
          });
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
