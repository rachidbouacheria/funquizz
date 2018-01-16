package com.bouacheria.funquizz.infrastructure.database.mongo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.bouacheria.funquizz.domain.model.Quizz;
import com.bouacheria.funquizz.domain.model.QuizzQuestion;

@Document
public class QuizzView {

	
	@Id
	private long id;
	
	@Field("name")
	private String name;

	@Field("description")
	private String description;

	@Field("questions")
	private List<QuizzQuestion> questions;
	
	@Field("user")
	private String user;
	
	
	public QuizzView() {
		
	}
	
	public QuizzView(long id , Quizz quizz, String user) {
		this.id = id;
		this.name = quizz.getName();
		this.description = quizz.getDescription();
		this.questions = quizz.getQuestions();
		this.user = user;
	}


	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public List<QuizzQuestion> getQuestions() {
		return questions;
	}

	public String getUser() {
		return user;
	}

	public long getId() {
		return id;
	}

}
