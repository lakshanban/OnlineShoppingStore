package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class topic {
	
	private String title;
	private List<Message> msgs;
	
	
	
	
	public topic(String title) {
		super();
		this.title = title;
		this.msgs = new ArrayList<Message>();
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<Message> getMsgs() {
		return msgs;
	}
	public void setMsgs(List<Message> msgs) {
		this.msgs = msgs;
	}
	
	

	
	
	
	
}
