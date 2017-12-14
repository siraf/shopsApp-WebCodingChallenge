import {Component, OnInit} from '@angular/core';
import {Shop} from '../model/shop';
import {ShopService} from '../shop.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-prefered-shops-list',
  templateUrl: '../Prefered-shops/prefered-shops-list.component.html'
})
export class PreferedShopsListComponent implements OnInit {
  shops: Shop[];
  error: string;
  constructor(
    private shopService: ShopService,
  ) {}

  ngOnInit(): void {
    this.getPreferedShops();
  }

  getPreferedShops(): void {
    this.shopService.getPreferedShops()
      .subscribe((shops: Shop[]) => {
          this.shops = shops;
        } ,
        (err: HttpErrorResponse) => {this.error = err.message; console.log(err.message); },
      );
  }
  removeFromPreferedShops(shop: Shop): void {
    this.shopService.removeFromPreferedShops(shop)
      .subscribe( () => {this.getPreferedShops(); });
  }


}
