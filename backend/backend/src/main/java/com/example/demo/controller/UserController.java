package com.example.demo.controller;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.requesBodies.AddUserRequest;

import com.example.demo.requesBodies.ChangePasswordRequest;
import com.example.demo.requesBodies.Comment;

import com.example.demo.requesBodies.GetUser;
import com.example.demo.requesBodies.OrderReq;
import com.example.demo.requesBodies.ProductUser;
import com.example.demo.requesBodies.RemoveOrder;
import com.example.demo.requesBodies.UserLoginRequest;
import com.example.demo.requesBodies.UserUpdateRequest;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
	
	@Autowired
	UserService service;
	
	
	@RequestMapping(path = "/useradd",method = RequestMethod.POST)
	public boolean AddUser(@RequestBody AddUserRequest request) {

		
		return service.AddUser(request.username, request.fname, request.lname, request.address, request.cnumber, request.usertype, request.bday, request.password,request.email);

		
	}
	
	@RequestMapping("/deleteuser")
	public void deleteProduct(@RequestParam String username) {
		
		service.removeUser(username);
		
	}
	
	@RequestMapping("/resetpassword")
	public void resetPassword(@RequestParam String username, String password) {
		
		service.resetPassword(username, password);
		
	}
	
	@RequestMapping(path = "/userlogin", method = RequestMethod.POST)
	public String Login(@RequestBody UserLoginRequest request) {
		
		//System.out.println(hashPassword(request.password));
		
		return service.Login(request.username,request.password);
	}
	
	@RequestMapping(path = "/usergetall", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		
		return service.getAllUsers();
	}
	
	
	@RequestMapping(path = "/userget", method = RequestMethod.POST)
	public User getUser(@RequestBody GetUser user) {
		
		return service.findUserByUsername(user.username);
	}
	
	@RequestMapping(path = "/changepassword", method = RequestMethod.POST)
	public String changePassword(@RequestBody ChangePasswordRequest request) {
		return service.changePassword(request.username, request.oldPassword, request.newPassword);
	}
	
	@RequestMapping(path = "/updateprofile", method = RequestMethod.POST)
	public boolean updateProfile(@RequestBody UserUpdateRequest request) {
		return service.updateProfile(request.username, request.fname, request.lname, request.email, request.cnumber, request.address, request.bday);
	}
	
	@RequestMapping("/getcart")
	public List<Order> getCart(@RequestBody GetUser user){
		
		return service.getCart(user.username);
		
	}
	
	@RequestMapping("/getwishlist")
	public List<Product> getWishList(@RequestBody GetUser user){
		
		return service.getWishList(user.username);
		
	}
	
	@RequestMapping("/addtowishlist")
	public void addtoWishList(@RequestBody ProductUser req) {

		service.addtoWishList(req.username,req.pid);
	}
	
	@RequestMapping("/removefromwishlist")
	public List<Product> removefromWishList(@RequestBody ProductUser req){
		return service.removeFromWishList(req.username,req.pid);
	}
	

	@RequestMapping("/addtocart")
	public void addtocart(@RequestBody OrderReq req) {
		service.setOrder(req.username, req.pid, req.quan);
	}
	
	@RequestMapping("/removefromcart")
	public List<Order> removeFromCart(@RequestBody RemoveOrder req){
		return service.removeFromCart(req.username,req.index);
	}


	@RequestMapping(path = "/purchaseOrder", method = RequestMethod.POST)
	public void purchaseItem(@RequestBody OrderReq orderReq) {
		service.purchaseItem(orderReq.username, orderReq.pid, orderReq.quan);
	}

	@RequestMapping(path = "/getPurchasedItems", method = RequestMethod.GET)
	public List<Product> getPurchases(@RequestBody GetUser user){
		return service.getPurchasedItems(user.username);

	}
	
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}
	
	


}
