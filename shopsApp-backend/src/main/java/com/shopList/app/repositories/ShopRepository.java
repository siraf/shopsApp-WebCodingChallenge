package com.shopList.app.repositories;

import java.util.Date;
import java.util.List;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.shopList.app.models.Shop;


public interface ShopRepository extends MongoRepository<Shop, String> {

	List<Shop> findByIsLikedTrue();
	List<Shop> findByLocationNearAndIsLikedFalseAndShownAfterBefore(Point refPoint,Date dateNow);
	

	    
}
