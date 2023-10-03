package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="User Details")
@RequestMapping("/user")
public class UserController 
{
	@Autowired
	UserService userService; 
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User user)
	{
		return userService.saveUser(user);
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}
	@GetMapping("/getUserById/{id}")
	public Optional<User> getUser(@PathVariable int id)
	{
		return userService.getUser(id);
	}
	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable int id)
	{
		userService.deleteUser(id);
	}
}
