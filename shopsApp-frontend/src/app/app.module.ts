
import { NgModule } from '@angular/core';

import {NearbyShopsListComponent} from './Nearby-shops/nearby-shops-list.component';
import {ShopService} from './shop.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {PreferedShopsListComponent} from './Prefered-shops/prefered-shops-list.component';
import {AppComponent} from './app.component';
import {routerConfig} from '../router.config';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    NearbyShopsListComponent,
    PreferedShopsListComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routerConfig)
],
providers: [ShopService],
  bootstrap: [AppComponent]
})

export class AppModule { }
