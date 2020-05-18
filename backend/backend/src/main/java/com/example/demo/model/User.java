package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonAppend.Attr;

@Document
public class User {
	@Id
    private String id;
    
    private String username;
    private String fname;
    private String lname;
    private String address;
    private String cnumber;
    private List<Product> cart;
    private List<Product> wishlist;
    private List<Product> purchased_items;
    private  String usertype;
    private String bday;
    private String password;
    private String email;
    
    
	public User(String username, String fname, String lname, String address, String cnumber, String usertype,
			String bday,String password,String email) {
		super();
	
		this.username = username;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.cnumber = cnumber;
		this.usertype = usertype;
		this.bday = bday;
		this.cart=new ArrayList<Product>();
		this.wishlist=new ArrayList<Product>();
		this.purchased_items=new ArrayList<Product>();
		this.password=password;
		this.email=email;
		
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCnumber() {
		return cnumber;
	}


	public void setCnumber(String cnumber) {
		this.cnumber = cnumber;
	}


	public List<Product> getCart() {
		return cart;
	}


	public void setCart(Product product) {
		this.cart.add(product);
	}


	public List<Product> getWishlist() {
		return wishlist;
	}


	public void setWishlist(Product product) {
		this.wishlist.add(product);
	}


	public List<Product> getPurchased_items() {
		return purchased_items;
	}


	public void setPurchased_items(List<Product> purchased_items) {
		this.purchased_items = purchased_items;
	}


	public String getUsertype() {
		return usertype;
	}


	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}


	public String getBday() {
		return bday;
	}


	public void setBday(String bday) {
		this.bday = bday;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	public void unsetCart(Product p) {
		
		this.cart.remove(p);
	}

}
