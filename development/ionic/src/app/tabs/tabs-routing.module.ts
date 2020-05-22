import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'notif',
            loadChildren: () => import('../home/notif/notif.module').then( m => m.NotifPageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./main/new-item/new-item.module').then( m => m.NewItemPageModule)
          },
          {
            path: 'info',
            loadChildren: () => import('./main/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./second/new-item/new-item.module').then( m => m.NewItemPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./second/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./third/new-item/new-item.module').then( m => m.NewItemPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./third/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
