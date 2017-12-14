

import {Routes} from '@angular/router';
import {NearbyShopsListComponent} from './app/Nearby-shops/nearby-shops-list.component';
import {PreferedShopsListComponent} from './app/Prefered-shops/prefered-shops-list.component';



export const routerConfig: Routes = [
  {
    path: 'shops/nearby',
    component: NearbyShopsListComponent
  },
  {
    path: 'shops/prefered',
    component: PreferedShopsListComponent
  },
  {
    path: '',
    redirectTo: 'shops/nearby',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'shops/nearby',
    pathMatch: 'full'
  }
];
