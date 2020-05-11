package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.requesBodies.CommentReq;
import com.example.demo.requesBodies.OwnerReq;
import com.example.demo.requesBodies.ProductRequest;
import com.example.demo.requesBodies.RatingReq;
import com.example.demo.requesBodies.categoryreq;
import com.example.demo.requesBodies.discountReq;
import com.example.demo.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductServiceImpl service;
	
	@RequestMapping(path = "/addproduct", method = RequestMethod.POST )
	public boolean addproduct(@RequestBody ProductRequest request) {
		
		return service.addProduct(request);
	}
	
	@RequestMapping(path = "/getallproducts", method = RequestMethod.GET)
	public List<Product> getallProducts() {
		
		return service.getAllProducts();
	}
	
	@RequestMapping("/addcomment")
	public void addComment(@RequestBody CommentReq req) {
		
		service.addComment(req);
		
	}
	
	@RequestMapping("/addrating")
	public void addRating(@RequestBody RatingReq req) {
		
		service.addRating(req);
		
	}
	
	@RequestMapping("/setdiscount")
	public void setDiscount(@RequestBody discountReq req) {
		
		service.setDiscount(req);
		
	}
	
	@RequestMapping("/getproductsbyowner")
	public List<Product> getProductsByOwner(@RequestBody OwnerReq req ){
		return service.getProductsByOwner(req);
	}
	
	@RequestMapping("/uploadimages")
	public void saveImages(@RequestParam("file") MultipartFile[] files, @RequestParam String productid) throws IOException {
		
		if(files.length==0) {
			
			System.out.println("fuck");
		}
		
		for(MultipartFile file:files) {
			
			service.uploadImages(file, productid);
			
			System.out.println("got file");
		}
		
		
	}
	
	
	@RequestMapping(path = "/filterbycat", method = RequestMethod.POST)
	public List<Product> getProductBycategory(@RequestBody categoryreq req) {
		
		return service.getproductBycategory(req);
	}


}
