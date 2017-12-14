package com.shopList.app;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ShopsAppApplication  {

	
	public static void main(String[] args) {
		SpringApplication.run(ShopsAppApplication.class, args);
	}

}
