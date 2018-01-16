package com.bouacheria.funquizz.domain.services;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.bouacheria.funquizz.infrastructure.database.mongo.model.SequenceCollection;

@Service
public class SequenceServiceImpl implements SequenceService{

	@Autowired
	private MongoTemplate mongo;
	
	@Override
	public long getNextQuizzSequenceId() {
		SequenceCollection counter = mongo.findAndModify(
				query(where("_id").is("quizzsequence")),
				new Update().inc("seq", 1), options().returnNew(true),
				SequenceCollection.class);

		return counter.getSeq();
	}

}
