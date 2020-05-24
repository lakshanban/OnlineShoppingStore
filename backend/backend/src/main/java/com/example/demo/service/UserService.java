package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mailUtil.MailUtil;
import com.example.demo.mailUtil.RandomString;
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
	
	public User findUserByEmail(String email) {
			
			try {
			List<User> list= repo.findByEmail(email);
			
			for(User x: list) {
				
				if(x.getEmail().equals(email)) {
					System.out.println("email user found");
					return x;
				}
				else {
					return null;
					}
				
			}
			
			}catch (Exception e) {
			    return null;
			}
			
			return null;
		}
	
	
	public boolean AddUser(String username, String fname, String lname, String address, String cnumber, String usertype,
			String bday, String password, String email) {
		
		try {
			
		     User user= findUserByUsername(username);
		     
		     if(user!=null) {
		    	 return false;
		     }
			
			if(usertype.toLowerCase().equals("manager")) {
				String randomPassword = RandomString.getRandomString();
				User newManager = new User(username, fname, lname, address, cnumber, usertype, bday, hashPassword(randomPassword), email);
				repo.save(newManager);
				MailUtil.sendEmail(email, username, randomPassword);
			}else {
				User newUser = new User(username, fname, lname, address, cnumber, usertype, bday, hashPassword(password), email);
				repo.save(newUser);
			}
			
			return true;
			
		}catch (Exception e) {
			return false;
		}
		
	}
	
	
	public String Login(String username,String password) {
		
		String uname = null;
		
		try {
			User user= findUserByUsername(username);
			User user2 = findUserByEmail(username);
			
			if(user==null && user2 == null) {
				
				System.out.println("user null");
				
			}
			if (user != null) {
				if (new BCrypt().checkpw(password, user.getPassword())) {
					uname = user.getUsername();
				}	
			}
			if (user2 != null) {
				System.out.println(user2.getPassword()+ "      "+ password + "    " + hashPassword(password) );
				if (new BCrypt().checkpw(password, user2.getPassword())) {
					uname = user2.getUsername();
				}	
			}
			
			
		}catch (Exception e) {}
		
		System.out.println(uname);
		return uname;
		
		
		
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

	
	public String changePassword(String username, String oldPassword, String newPassword) {
		
		String msg = null;
		List<User> list=repo.findAll();
		
		for(User user : list){
			
			if(user.getUsername().equals(username)) {		
				if(new BCrypt().checkpw(oldPassword, user.getPassword())) {
					user.setPassword(hashPassword(newPassword));
					repo.save(user);
					msg = "success";
					System.out.println("password changed...");
				}else {
					msg = "faliure";
					System.out.println("password changed error....");
				}
			}
			
		}
		
		return msg;
		
	}
	
public boolean updateProfile(String username, String fname, String lname, String email, String cnumber, String address, String bday) {
		
		List<User> list=repo.findAll();
		
		for(User user : list){
			
			if(user.getUsername().equals(username)) {		
				user.setFname(fname);
				user.setLname(lname);
				user.setEmail(email);
				user.setCnumber(cnumber);
				user.setAddress(address);
				user.setBday(bday);
				
				repo.save(user);
				
				return true;
			}
			
		}
		return false;
	}
	
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
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


	public void purchaseItem(String username, String pid, int quantity) {

		List<User> list = repo.findAll();

		for (User user : list) {

			if (user.getUsername().equals(username)) {

				List<Product> wlist = user.getPurchased_items();

				for (Product product : wlist) {

					if (product.getId().equals(pid)) {

						return;
					}

				}


				List<Product> plist = prepo.findAll();

				for (Product product : plist) {

					if (product.getId().equals(pid)) {

						user.setPurchased_items(product);
						repo.save(user);

					}
				}

			}
		}
	}

		public List<Product> getPurchasedItems (String username){

			List<User> list = repo.findAll();

			for (User user : list) {

				if (user.getUsername().equals(username)) {
					return user.getPurchased_items();
				}

			}

			return new ArrayList<Product>();

		}
		
		public void removeUser(String username) {
			
			
			List<User> list= repo.findAll();
			
			for(User user: list) {
				
				if(user.getUsername().equals(username)) {
					
					repo.delete(user);
				}
				
			}
			
		}
		
		
		public void resetPassword(String username, String password) {
			
			
			List<User> list= repo.findAll();
			
			for(User user: list) {
				
				if(user.getUsername().equals(username)) {
					
					user.setPassword(hashPassword(password));
					repo.save(user);
				}
				
			}
			
		}
		
		
		
		
		
	}
