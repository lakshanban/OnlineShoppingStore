package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Order;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repo.ProductRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.requesBodies.Comment;
import com.example.demo.requesBodies.GetUser;

@Service
public class UserService {
	
	@Autowired
	UserRepo repo;
	
	@Autowired
	ProductRepo prepo;
	
	public User findUserByUsername(String username) {
		
		try {
		List<User> list= repo.findByUsername(username);
		
		for(User x: list) {
			
			if(x.getUsername().equals(username)) {
				
				return x;
			}
			else {return null;}
			
		}
		
		}catch (Exception e) {
		    return null;
		}
		
		return null;
	}
	
	
	public boolean AddUser(String username, String fname, String lname, String address, String cnumber, String usertype,
			String bday,String password,String email) {
		
		try {
			
		     User user= findUserByUsername(username);
		     
		     if(user!=null) {
		    	 return false;
		     }
			
			User newuser= new User(username, fname, lname, address, cnumber, usertype, bday,password,email);
			
			repo.save(newuser);
			
			return true;
		}catch (Exception e) {
			return false;
		}
		
	}
	
	
	public boolean Login(String username,String password) {
		
		try {
			User user= findUserByUsername(username);
			
			if(user==null)
				return false;
			
			return new BCrypt().checkpw(password, user.getPassword());
		}catch (Exception e) {
			return false;
		}
		
		
	}
	
	public List<User> getAllUsers(){
		
		return repo.findAll();
	}
	
	public List<Order> getCart(String username){
		
		List<User> list=repo.findAll();
		
		for(User user:list){
			
			if(user.getUsername().equals(username)) {
				return user.getCart();
			}
			
		}
		
		return new ArrayList<Order>();
	
	}
	
	public List<Product> getWishList(String username){
		
		
	List<User> list=repo.findAll();
		
		for(User user:list){
			
			if(user.getUsername().equals(username)) {
				return user.getWishlist();
			}
			
		}
		
		return new ArrayList<Product>();

}
	

	

	public void setOrder(String username, String pid, int quan) {
		
		
			List<User> list=repo.findAll();
		
		for(User user:list){
			
			if(user.getUsername().equals(username)) {
				
				
				
				List<Product> plist= prepo.findAll();
				
				for(Product product:plist) {
					
					
					if(product.getId().equals(pid)) {
						
						
						user.setCart(new Order(product, quan));
						repo.save(user);
						
					}
				}	
			}
			
		}
		
		
	}

	
	public List<Order> removeFromCart(String username,int index){
		
		List<User> list= repo.findAll();
		
		for(User user:list) {
			
			if(user.getUsername().equals(username)) {
				
				user.removeFromCart(index);
				
				repo.save(user);
				
				return user.getCart();
			}
			
			
		}
		
		return null;
	}
	
	
	public void addtoWishList(String username,String pid) {
		
		List<User> list=repo.findAll();
		
		for(User user:list) {
			
			if(user.getUsername().equals(username)) {
				
				List<Product> wlist=user.getWishlist();
				
				for(Product product:wlist) {
					
					if(product.getId().equals(pid)) {
						
						return;
					}
					
				}
				
				
				
				List<Product> plist=prepo.findAll();
				
				for(Product product: plist) {
					
					if(product.getId().equals(pid)) {
						
						user.setWishlist(product);
						repo.save(user);
						
					}
				}
				
			}
		}
		
		
	}
	
	
	public List<Product> removeFromWishList(String username,String pid){
		
		List<User> list= repo.findAll();
		
		for(User user:list) {
			if(user.getUsername().equals(username)) {
				
				
				user.removefromWishList(pid);
				
				repo.save(user);
				
				return user.getWishlist();
			}
		}
		
		return new ArrayList<Product>();
	}
	

}
