package com.example.demo.requesBodies;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Comment {
	
	public String from;
	public String comment;
	public String date;
	
	
	public Comment(String from, String comment) {
		super();
		this.from = from;
		this.comment = comment;
		
		DateFormat df=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date= new Date();
		
		this.date= df.format(date).toString();
		
	}
	
	

}
