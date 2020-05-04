package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class AllChats {

	@Id
	private String ID;
	private List<topic> topics;

	public AllChats() {
		super();
		this.topics = new ArrayList<topic>();
	}

	public List<topic> getList() {
		return topics;
	}

	public void setList(List<topic> topics) {
		this.topics = topics;
	}
	
	
	
	
	
	
}
