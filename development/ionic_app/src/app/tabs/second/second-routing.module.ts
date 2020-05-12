import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPage } from './second.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPage
  },
  {
    path: 'item-details',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./new-item/new-item.module').then( m => m.NewItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPageRoutingModule {}
