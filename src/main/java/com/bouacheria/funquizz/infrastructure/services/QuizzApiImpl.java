package com.bouacheria.funquizz.infrastructure.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.bouacheria.funquizz.domain.model.Quizz;
import com.bouacheria.funquizz.domain.services.SequenceService;
import com.bouacheria.funquizz.infrastructure.database.mongo.model.QuizzView;
import com.bouacheria.funquizz.infrastructure.database.mongo.model.QuizzViewRepo;

@Service
public class QuizzApiImpl implements QuizzApi{

	@Autowired
	private QuizzViewRepo repo;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Autowired
	private MongoTemplate mongo;

	@Override
	public void saveQuizz(Quizz quizz) {
		
		final String user = SecurityContextHolder.getContext().getAuthentication().getName();
		long nexId =  sequenceService.getNextQuizzSequenceId();
		QuizzView quizzView = new QuizzView(nexId, quizz,user);
		repo.save(quizzView);
	}
	
	@Override
	public List<QuizzView> findAllQuizzes() {
		return repo.findAll();
	}

	@Override
	public void deleteQuizze(long quizzId) {
		repo.delete(quizzId);
	}

	@Override
	public QuizzView findQuizzById(long quizzId) {
		return repo.findOne(quizzId);
		
	}

	@Override
	public void updateQuizz(Quizz quizz) {
		final String user = SecurityContextHolder.getContext().getAuthentication().getName();	
		QuizzView quizzView = new QuizzView(quizz.getId(), quizz,user);
		repo.save(quizzView);

	}

}
