package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Message;
import com.example.demo.model.topic;
import com.example.demo.repo.ChatRepo;
import com.example.demo.model.AllChats;

@Service
public class ChatService {
	
	@Autowired
	ChatRepo repo;
	
	
	public AllChats getAllChat() {
		
		List<AllChats> list= repo.findAll();
		
		if(list.isEmpty()) {
			
			list.add(new AllChats());
		}
		
		AllChats chat= list.get(0);
		
		
		if(chat.getList().isEmpty()) {
			
			chat.getList().add(new topic("Customer Service"));
			
		}
		
		return chat;
		
		
	}
	
	
	public AllChats GetAllMessages() {
		
		return  getAllChat();
	}
	
	
	
	public Message addMessage(String from, String msg) {
		
		Message message= new Message(from, msg);
		
		AllChats chats= getAllChat();
		
		chats.getList().get(0).getMsgs().add(message);
		
		repo.save(chats);
		
		return message;
		
		
	}
	
	
	
	

}
