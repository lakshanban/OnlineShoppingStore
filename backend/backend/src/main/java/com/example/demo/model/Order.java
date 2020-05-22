package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Order {

@Id
private String OID;
private Product product;
private int quan;





public Order(Product product, int quan) {
	super();
	this.product = product;
	this.quan = quan;
}


public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}
public int getQuan() {
	return quan;
}
public void setQuan(int quan) {
	this.quan = quan;
}

	
}
