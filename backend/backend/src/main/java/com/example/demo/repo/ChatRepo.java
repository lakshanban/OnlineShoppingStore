package com.example.demo.repo;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.AllChats;

@Repository
public interface ChatRepo extends MongoRepository<AllChats, String> {
	
	
	

}
