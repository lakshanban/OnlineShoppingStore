package com.example.demo.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface UserRepo extends MongoRepository<User, String> {

	public List<User> findByUsername(String username);
	public List<User> findByEmail(String email);
	
	
}
