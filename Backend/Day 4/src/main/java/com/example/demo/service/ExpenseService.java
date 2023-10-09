package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Expense;
import com.example.demo.model.User;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ExpenseService {

	@Autowired
	ExpenseRepository expenseRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public Expense saveExpense(Expense expense,Long id)

	{
		User user=new User();
		ArrayList<Expense> array=new ArrayList<>();
		 Optional<User> findById = userRepository.findById(id);
		BeanUtils.copyProperties(findById.get(), user);
		array.add(expense);
		user.setExpenses(array);
		userRepository.save(user);
		return expenseRepository.save(expense);
	}
	
	public List<Expense> getAllExpense()
	{
		return expenseRepository.findAll();
	}
	
	public Optional<Expense> getExpense(int id)
	{
		return expenseRepository.findById(id);
	}
	
	public Expense updateExpense(Expense expense,int id)
	{
		Optional<Expense> e=expenseRepository.findById(id);
		
		if(e.isPresent())
			return expenseRepository.save(expense);
		else 
			return null;
		
	}
	
	public void deleteExpense(int id)
	{
		expenseRepository.deleteById(id);
	}
}
