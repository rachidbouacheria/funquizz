package com.bouacheria.funquizz.domain.model;

import java.util.List;

public class QuizzQuestion {

	private String question;
	private List<QizzResponse> responses;
	
	public QuizzQuestion() {
		// TODO Auto-generated constructor stub
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<QizzResponse> getResponses() {
		return responses;
	}

	public void setResponses(List<QizzResponse> responses) {
		this.responses = responses;
	}
	
}
