package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Notice;
import com.example.demo.repo.NoticeRepo;

@Service
public class NoticeService {

	@Autowired
	NoticeRepo repo;
	
	public void addNotice(String topic,String content) {
		
		repo.save(new Notice(topic, content));
	}
	
	public List<Notice> getallNotices() {
		
		return repo.findAll();
	}
	
	
}
