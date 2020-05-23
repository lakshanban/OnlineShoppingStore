package com.example.demo.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Order;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.requesBodies.GetUser;

@Service
public class OrderService {

	@Autowired
	UserRepo repo;
	
	public List<Order> getAllOrdersByuser(String username){
		
		List<User> list= repo.findAll();
		
		for(User user:list) {
			
			if(user.getUsername().equals(username)) {
				return user.getCart();
			}
			
		}
		
		return new ArrayList<>();
		
	}
	
	public HashSet<Product> getAlltheProducts(String username){
		
		List<User> list= repo.findAll();
		
		HashSet<Product> set= new HashSet<>();
		
		for(User user:list) {
			
			if(user.getUsername().equals(username)) {
				
				List<Order> olist= user.getCart();
				
				for(Order order: olist) {
					
					set.add(order.getProduct());
					
				}
				
			}
		}
		
		return set;
	}
	
}
