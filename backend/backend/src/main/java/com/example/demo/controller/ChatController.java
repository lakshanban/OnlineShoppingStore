package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AllChats;
import com.example.demo.model.Message;
import com.example.demo.requesBodies.ChatRequst;
import com.example.demo.service.ChatService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

	
	@Autowired
	ChatService service;
	
	
	@RequestMapping("/allmessages")
     public AllChats getAllChats() {
    	 
    	 return service.GetAllMessages();
     }
	
	
	@RequestMapping("/sendmessage")
	public Message sendMessage(@RequestBody ChatRequst request) {
		
		return service.addMessage(request.from, request.msg);
	}
	
	
	
	
}
