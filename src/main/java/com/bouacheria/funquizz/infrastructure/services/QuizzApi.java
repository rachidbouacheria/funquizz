package com.bouacheria.funquizz.infrastructure.services;

import java.util.List;

import com.bouacheria.funquizz.domain.model.Quizz;
import com.bouacheria.funquizz.infrastructure.database.mongo.model.QuizzView;

public interface QuizzApi {

	void saveQuizz(Quizz quizz);
	List<QuizzView> findAllQuizzes();
	void deleteQuizze(long quizzId);
}