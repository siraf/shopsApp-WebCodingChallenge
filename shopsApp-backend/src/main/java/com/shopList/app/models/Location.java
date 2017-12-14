package com.shopList.app.models;

import java.util.ArrayList;




public class Location {
	private String type; 
	private ArrayList<Double> coordinates;
	
	

	public Location(String type, ArrayList<Double> coordinates) {
		super();
		this.type = type;
		this.coordinates = coordinates;
	}

	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getType() {
		return type;
	}

	

	public ArrayList<Double> getCoordinates() {
		return coordinates;
	}

	
	
	
}
