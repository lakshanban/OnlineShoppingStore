//IT18125412 T. M. D. D. Thalakumbura

package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repo.ProductRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.requesBodies.Comment;
import com.example.demo.requesBodies.CommentReq;
import com.example.demo.requesBodies.GetUser;
import com.example.demo.requesBodies.OwnerReq;
import com.example.demo.requesBodies.ProductRequest;
import com.example.demo.requesBodies.ProductUser;
import com.example.demo.requesBodies.RatingReq;
import com.example.demo.requesBodies.categoryreq;
import com.example.demo.requesBodies.discountReq;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.ls.LSInput;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ProductServiceImpl  {
	
	
	@Autowired
	ProductRepo repo;
	
	@Autowired
	UserRepo urepo;
	
	
	public String addProduct(ProductRequest req) {
		
		Product p=repo.save(new Product(req.pname, req.pdescription, req.pdiscount, req.pprice, req.powner,req.pcategory));
	
		if(p==null) {
			return "error";
		}
		System.out.println(p.getId());
		return p.getId();
		
	}
	
	public List<Product> getAllProducts(){
		
		return repo.findAll();
	}
	
	
	public void addComment(CommentReq req) {
		
	      List<Product> list = repo.findAll();
	      
	      for(Product product: list) {
	    	  
	    	  if(product.getId().equals(req.productid)) {
	    		  
	    		  product.setPcomments(new Comment(req.username, req.comment));
	    		  
	    		  repo.save(product);
	    		  
	    	  }
	      }
		
	}
	
	
	public void addRating(RatingReq req) {
		
	      List<Product> list = repo.findAll();
	      
	      for(Product product: list) {
	    	  
	    	  if(product.getId().equals(req.productid)) {
	    		  
	    		  product.setPcomments(new Double(req.rating));
	    		  
	    		  repo.save(product);
	    		  
	    	  }
	      }
		
	}
	
	public void setDiscount(discountReq req) {
		
	    List<Product> list = repo.findAll();
	      
	      for(Product product: list) {
	    	  
	    	  if(product.getId().equals(req.productid)) {
	    		  
	    		  product.setPdiscount(req.discount);
	    		  
	    		  repo.save(product);
	    		  
	    	  }
	      }
		
	}
	
	public List<Product> getProductsByOwner(OwnerReq req){
		
		List<Product> list=repo.findAll();
		List<Product> sortedlist= new ArrayList<Product>();
		
		
		for(Product product: list) {
			
			if(product.getPowner().equals(req.username)) {
				
				sortedlist.add(product);
			}
		}
		
		
		return sortedlist;
		
	}
	
	public String uploadImages(MultipartFile file, String productid) throws IOException {
		
		
		List<Product> list=repo.findAll();
		
		for(Product product: list) {
			
			if(product.getId().equals(productid)) {
				
				product.setPimages(new Binary(BsonBinarySubType.BINARY,file.getBytes()));
				
				repo.save(product);	
			}
		}
		return "done";
		
		
	}
	
	
	public List<Product> getproductBycategory(categoryreq req){
		
		List<Product> list= repo.findAll();
		List<Product> sortedList= new ArrayList<>();
		
		for(Product product: list) {
			
			if(product.getPcategory().equals(req.category)) {
				sortedList.add(product);
				
			}
		}
		
		return sortedList;
		
	}
	
	public void removeProduct(String id) {
		
		
		List<Product> list= repo.findAll();
		
		for(Product product: list) {
			
			if(product.getId().equals(id)) {
				
				repo.delete(product);
			}
			
		}
		
	}
	
	public List<Product> searchProducts(String query){
		
		List<Product> list= repo.findAll();
		List<Product> serchedlist= new ArrayList<>();
		
		String regex = query.toLowerCase();
		
		Pattern pattern = Pattern.compile(regex);
		
		for(Product product:list) {
			
			Matcher matcher1 =pattern.matcher(product.getPname().toLowerCase());
			Matcher matecher2= pattern.matcher(product.getPdescription().toLowerCase());
			
			if(matcher1.find()|| matecher2.find()) {
				
				serchedlist.add(product);
				
			}
			
			
			
		}
		
		return serchedlist;
		
		
		
	}
	

	
	public void addtoCart(ProductUser req) {
		
		List<User> list = urepo.findAll();
		
		for(User user: list) {
			
			if(user.getUsername().equals(req.username)) {
				
				List<Product> plist= repo.findAll();
				
				for(Product p: plist) 
				{
					if(p.getId().equals(req.pid)) {
						
						user.setCart(p);
						
						urepo.save(user);
						
					}
				}
			   
				
				
			}
			
		}
		
		
	}
	
	
	
	
	public void removeFromCart(ProductUser req) {
		
		List<User> list = urepo.findAll();
		
		for(User user: list) {
			
			if(user.getUsername().equals(req.username)) {
				
				List<Product> plist= repo.findAll();
				
				for(Product p: plist) 
				{
					if(p.getId().equals(req.pid)) {
						
						System.out.println(Product.class.getName());
						
						user.unsetCart(p);
						
						urepo.save(user);
						
					}
				}
			   
				
				
			}
			
		}
		
		
	}
	
	public List<Comment> getComments(String pid){
		
		List<Product> list= repo.findAll();
		
		for(Product product:list) {
			
			if(product.getId().equals(pid)) {
				
				
				return product.getComments();
			}
		}
		return null;
	}

  
}
