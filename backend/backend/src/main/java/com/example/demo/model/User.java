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
    private List<Order> cart;
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
		this.cart=new ArrayList<Order>();
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


	public List<Order> getCart() {
		return this.cart;
	}


	public void setCart(Order o) {
		this.cart.add(o);
	}


	public List<Product> getWishlist() {
		return wishlist;
	}


	public void setWishlist(Product product) {
		this.wishlist.add(product);
	}


	public void setPurchased_items(Product purchased_items) {
		this.purchased_items.add(purchased_items);
	}

	public List<Product> getPurchased_items() {
		return purchased_items;
	}


	public String getPassword() {
		return password;
	}


    public void removeFromCart(int index) {
    	
    	this.cart.remove(index);
    	
    }
    
    public void removefromWishList(String pid) {
    	
    	int i=0;
    	int index;
    	
    	
    	
    	
    	for(Product product:this.wishlist) {
    		
    		if(product.getId().equals(pid)) {
    			
    			index=i;
    			break;
    		
    		}
    		
    		i=i+1;
    	}
    	
    	try {
    	this.wishlist.remove(i);
    	}catch (Exception e) {
			System.out.println(e);
		}
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public void setCart(List<Order> cart) {
		this.cart = cart;
	}


	public void setWishlist(List<Product> wishlist) {
		this.wishlist = wishlist;
	}


	public void setPurchased_items(List<Product> purchased_items) {
		this.purchased_items = purchased_items;
	}


	public void setPassword(String password) {
		this.password = password;
	}
    
    
    
    
    
    

}
