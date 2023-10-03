package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class User 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int user_id;
	private String email;
	private String username;
	private String password;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(referencedColumnName="user_id" ,name="user_id")
	private List<Expense> expenses;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(referencedColumnName="user_id",name="user_id")
	private List<Income> incomes;

	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String email, String username, String password, List<Expense> expenses,
			List<Income> incomes) {
		super();
		this.user_id = user_id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.expenses = expenses;
		this.incomes = incomes;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Expense> getExpenses() {
		return expenses;
	}

	public void setExpenses(List<Expense> expenses) {
		this.expenses = expenses;
	}

	public List<Income> getIncomes() {
		return incomes;
	}

	public void setIncomes(List<Income> incomes) {
		this.incomes = incomes;
	}
	
	
}
