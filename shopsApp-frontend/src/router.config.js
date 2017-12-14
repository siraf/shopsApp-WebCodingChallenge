"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nearby_shops_list_component_1 = require("./app/Nearby-shops/nearby-shops-list.component");
var prefered_shops_list_component_1 = require("./app/Prefered-shops/prefered-shops-list.component");
exports.routerConfig = [
    {
        path: 'shops/nearby',
        component: nearby_shops_list_component_1.NearbyShopsListComponent
    },
    {
        path: 'shops/prefered',
        component: prefered_shops_list_component_1.PreferedShopsListComponent
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
