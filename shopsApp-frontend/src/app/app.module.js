"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nearby_shops_list_component_1 = require("./Nearby-shops/nearby-shops-list.component");
var shop_service_1 = require("./shop.service");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var prefered_shops_list_component_1 = require("./Prefered-shops/prefered-shops-list.component");
var app_component_1 = require("./app.component");
var router_config_1 = require("../router.config");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                nearby_shops_list_component_1.NearbyShopsListComponent,
                prefered_shops_list_component_1.PreferedShopsListComponent,
                app_component_1.AppComponent
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(router_config_1.routerConfig)
            ],
            providers: [shop_service_1.ShopService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
