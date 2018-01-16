package com.bouacheria.funquizz.domain.model;

import java.util.List;

public class Quizz {
	
    private long id;
	private String name;
	private String description;
	private List<QuizzQuestion> questions;

	public Quizz() {
	}
	
	public Quizz(long id, String name, String description, List<QuizzQuestion> questions) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.questions = questions;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<QuizzQuestion> getQuestions() {
		return questions;
	}

	public void setQuestions(List<QuizzQuestion> questions) {
		this.questions = questions;
	}

	public long getId() {
		return id;
	}

}
