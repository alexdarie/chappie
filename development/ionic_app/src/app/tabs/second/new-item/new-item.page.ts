import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BackendServerService } from '../../../services/backend-server.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface Recipe {
  id: number;
  name: string;
  details: string;
  time: number;
  type: string;
  rating: number;
}

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  showProgressBar = false;
  URI = this.backend.URI;
  ws = this.backend.ws;
  canvasItem: Recipe = {
    id: -1,
    name: '',
    details: '',
    time: 1,
    type: '',
    rating: null
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastController,
    private backend: BackendServerService,
    private localStorage: LocalStorageService) {
  }

  ngOnInit() {
  }

  onCreate() {
    // console.log('main.new-item: onCreate');
    // this.showProgressBar = true;
    // setTimeout(() => {
    //   const pBook = this.http.post(this.URI + '/recipe', this.canvasItem).toPromise();
    //   pBook.then((resp) => {
    //     this.presentOkToast('Succesfully created.');
    //     this.router.navigate(['/tabs/tab1']);
    //   })
    //   .catch((err) => {
    //     this.presentOkToast('Error while adding.');
    //     this.router.navigate(['/tabs/tab1']);
    //   });
    // }, 1000);
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
