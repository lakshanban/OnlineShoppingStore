package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Notice;
import com.example.demo.requesBodies.NoticeReq;
import com.example.demo.service.NoticeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NoticeController {
	
	@Autowired
	NoticeService service;

	
	@RequestMapping(path = "/noticeadd")
	public void noticeadd(@RequestBody NoticeReq req) {
		
		service.addNotice(req.topic, req.content);
		
	}
	
	@RequestMapping("/noticegetall")
	public List<Notice> noticegetall(){
		return service.getallNotices();
	}
}
