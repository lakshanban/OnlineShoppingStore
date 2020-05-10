package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Message {
	
	private String from;
	private String msg;
	
	
	
	
	
	
	
	public Message(String from, String msg) {
		super();
		this.from = from;
		this.msg = msg;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	

}
