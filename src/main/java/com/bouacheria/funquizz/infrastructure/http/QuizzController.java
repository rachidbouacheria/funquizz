package com.bouacheria.funquizz.infrastructure.http;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class QuizzController {

	@RequestMapping(value = "/quizz", method = RequestMethod.POST)
	public String saveQuizz() {
		return "Saving Quizz";
	}
	
	@RequestMapping(value = "/quizz", method = RequestMethod.GET)
	public String getQuizz() {
		return "getting Quizz";
	}

}
