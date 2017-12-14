package com.shopList.app.services;

import java.util.List;


import com.shopList.app.models.Shop;

public interface ShopServiceImpl {
	
	public List<Shop> findNearbyShops();
	public List<Shop> findPreferedShops();
	public Shop getShop(String id);
	public Shop saveShop(Shop shop);
	
	
	
	
}
