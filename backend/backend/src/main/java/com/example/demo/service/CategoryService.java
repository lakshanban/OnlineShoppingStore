package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.repo.CategoryRepo;
import com.example.demo.requesBodies.CategoryRequest;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepo repo;
	
	public void addCategory(CategoryRequest request) {
		
		repo.save(new Category(request.cname));
	}

	
	public List<String> getAllCategories(){
		
		List<String> namelist= new ArrayList<String>();
		List<Category> list= repo.findAll();
		
		for(Category cat: list) {
			
			namelist.add(cat.getCname());
		}
		
		return namelist;
		
	} 
	
	public void removeCategory(String name) {
		
		List<Category> list= repo.findAll();
		
		for(Category category: list) {
			
			if(category.getCname().equals(name)) {
				
				repo.delete(category);
			}
			
		}
		
	}
	
	
	
}
