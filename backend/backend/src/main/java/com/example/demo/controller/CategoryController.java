package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Category;
import com.example.demo.requesBodies.CategoryRequest;
import com.example.demo.service.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
	
	@Autowired
	private CategoryService service;

	@RequestMapping(method = RequestMethod.POST, path = "/createcategory")
	public void createCategory(@RequestBody CategoryRequest request) {
		
		service.addCategory(request);
		
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/getallcategories")
	public List<String> getallCategories(){
		
		return service.getAllCategories();
	}
	
	@RequestMapping("/deletecategory")
	public void removeCategory(@RequestParam String name) {
		
		service.removeCategory(name);
		
	}
}
