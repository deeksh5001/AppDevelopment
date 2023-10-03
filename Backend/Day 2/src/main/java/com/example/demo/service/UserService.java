package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	UserRepository userRepository; 
	
	public User saveUser(User user)
	{
		return userRepository.save(user);
	}
	
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}
	
	public Optional<User> getUser(int id)
	{
		return userRepository.findById(id);
	}
	
	public void deleteUser(int id)
	{
		userRepository.deleteById(id);
	}
}
