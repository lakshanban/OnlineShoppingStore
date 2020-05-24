package com.example.demo.controller;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.requesBodies.GetUser;
import com.example.demo.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

	
	@Autowired
	OrderService orderservice;
	
	@RequestMapping("/getallproductsfromorder")
	public HashSet<Product> getallProducts(@RequestBody GetUser req){
		
		return orderservice.getAlltheProducts(req.username);
	}
	
	
}
