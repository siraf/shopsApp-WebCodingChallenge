import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Shop} from './model/shop';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShopService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getNearbyShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.baseUrl + '/shops/nearby/');
  }

  getPreferedShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.baseUrl + '/shops/prefered/');
  }


  preferShop(shop: Shop): Observable<Shop> {
    return this.http.put<Shop>(this.baseUrl + '/shops/preferShop/' + shop.id, shop);
  }
  removeFromPreferedShops(shop: Shop): Observable<Shop> {
    return this.http.put<Shop>(this.baseUrl + '/shops/removeFromPreferedShops/' + shop.id, shop);
  }
  dislikeShop(shop: Shop): Observable<Shop> {
    return this.http.put<Shop>(this.baseUrl + '/shops/dislike/' + shop.id, shop);
  }
}
