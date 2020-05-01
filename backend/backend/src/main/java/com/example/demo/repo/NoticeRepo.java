package com.example.demo.repo;

import java.awt.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Notice;
@Repository
public interface NoticeRepo extends MongoRepository<Notice,String> {

	
	
}
