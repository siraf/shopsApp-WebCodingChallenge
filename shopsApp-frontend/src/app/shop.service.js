"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    ShopService.prototype.getNearbyShops = function () {
        return this.http.get(this.baseUrl + '/shops/nearby/');
    };
    ShopService.prototype.getPreferedShops = function () {
        return this.http.get(this.baseUrl + '/shops/prefered/');
    };
    ShopService.prototype.preferShop = function (shop) {
        return this.http.put(this.baseUrl + '/shops/preferShop/' + shop.id, shop);
    };
    ShopService.prototype.removeFromPreferedShops = function (shop) {
        return this.http.put(this.baseUrl + '/shops/removeFromPreferedShops/' + shop.id, shop);
    };
    ShopService.prototype.dislikeShop = function (shop) {
        return this.http.put(this.baseUrl + '/shops/dislike/' + shop.id, shop);
    };
    ShopService = __decorate([
        core_1.Injectable()
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
