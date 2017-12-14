"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NearbyShopsListComponent = (function () {
    function NearbyShopsListComponent(shopService) {
        this.shopService = shopService;
    }
    NearbyShopsListComponent.prototype.ngOnInit = function () {
        this.getNearbyShops();
    };
    NearbyShopsListComponent.prototype.getNearbyShops = function () {
        var _this = this;
        this.shopService.getNearbyShops()
            .subscribe(function (shops) {
            _this.shops = shops;
        }, function (err) { _this.error = err.message; console.log(err.message); });
    };
    NearbyShopsListComponent.prototype.preferShop = function (shopData) {
        var _this = this;
        this.shopService.preferShop(shopData)
            .subscribe(function () { _this.getNearbyShops(); });
    };
    NearbyShopsListComponent.prototype.dislikeShop = function (shop) {
        var _this = this;
        this.shopService.dislikeShop(shop)
            .subscribe(function () { _this.getNearbyShops(); });
    };
    NearbyShopsListComponent = __decorate([
        core_1.Component({
            selector: 'app-shops-list',
            templateUrl: './nearby-shops-list.component.html'
        })
    ], NearbyShopsListComponent);
    return NearbyShopsListComponent;
}());
exports.NearbyShopsListComponent = NearbyShopsListComponent;
