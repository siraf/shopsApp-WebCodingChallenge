import {Component, OnDestroy, OnInit} from '@angular/core';
import {Shop} from '../model/shop';
import {ShopService} from '../shop.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-nearby-shops-list',
  templateUrl: './nearby-shops-list.component.html'
})
export class NearbyShopsListComponent implements OnInit {
  shops: Shop[];
  error: string;
  constructor(
    private shopService: ShopService,
  ) {}

  ngOnInit(): void {
    this.getNearbyShops();
  }

  getNearbyShops(): void {
    this.shopService.getNearbyShops()
      .subscribe((shops: Shop[]) => {
      this.shops = shops;
       } ,
        (err: HttpErrorResponse) => {this.error = err.message; console.log(err.message); },
      );
  }
  preferShop(shopData: Shop): void {
    this.shopService.preferShop(shopData)
      .subscribe(() => {this.getNearbyShops(); });
  }
  dislikeShop(shop: Shop): void {
    this.shopService.dislikeShop(shop)
      .subscribe(() => {this.getNearbyShops(); });
  }


}
