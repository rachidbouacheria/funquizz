package com.bouacheria.funquizz.model;

import org.springframework.data.mongodb.core.mapping.Field;

public class Quizz {

	@Field("name")
	private String name;

	@Field("description")
	private String description;

	@Field("questions_with_answers")
	private QuestionWithAnswers questionsWithAnswers;

	public Quizz() {
		// TODO Auto-generated constructor stub
	}

}
