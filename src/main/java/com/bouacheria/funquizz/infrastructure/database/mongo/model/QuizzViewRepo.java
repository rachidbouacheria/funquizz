package com.bouacheria.funquizz.infrastructure.database.mongo.model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizzViewRepo extends MongoRepository<QuizzView, Long> {

}
