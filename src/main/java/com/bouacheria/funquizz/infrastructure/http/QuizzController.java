package com.bouacheria.funquizz.infrastructure.http;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bouacheria.funquizz.domain.model.Quizz;
import com.bouacheria.funquizz.infrastructure.database.mongo.model.QuizzView;
import com.bouacheria.funquizz.infrastructure.services.QuizzApi;


@RestController
public class QuizzController {

	public static final String JSON_QUIZZ1 = "{\"id\":0,\"name\":\"\",\"description\":\"\",\"questions\":[{\"question\":\"Quelle est la couleur du cheval blanc d henry IV?\",\"responses\":[{\"value\":\"R4\",\"correct\":\"false\"},{\"value\":\"R5\",\"correct\":\"false\"},{\"value\":\"R6\",\"correct\":\"false\"},{\"value\":\"R7\",\"correct\":\"true\"}]}]}";
	public static final String JSON_QUIZZ = "{\n" + 
			"   \"id\":0,\n" + 
			"   \"name\":\"Futchball Quizz\",\n" + 
			"   \"description\":\"Quizz sur le foot do brazil\",\n" + 
			"   \"questions\":[\n" + 
			"      {\n" + 
			"         \"question\":\"Qui est Pele??\",\n" + 
			"         \"responses\":[\n" + 
			"            {\n" + 
			"               \"value\":\"Le meilleur jour de foot du monde. On l'appelle le roi Pele\",\n" + 
			"               \"correct\":\"true\"\n" + 
			"            },\n" + 
			"            {\n" + 
			"               \"value\":\"Un marrin qui aimait a voguer les mers du Pacific\",\n" + 
			"               \"correct\":\"false\"\n" + 
			"            },\n" + 
			"            {\n" + 
			"               \"value\":\"Le mari de Madame Bovary\",\n" + 
			"               \"correct\":\"false\"\n" + 
			"            },\n" + 
			"            {\n" + 
			"               \"value\":\"Le roi des animaux\",\n" + 
			"               \"correct\":\"false\"\n" + 
			"            }\n" + 
			"         ]\n" + 
			"      }\n" + 
			"   ]\n" + 
			"}";
	public static final String JSON_QUIZZ_ARRAY = "["+ JSON_QUIZZ + "]";
	
	
	@Autowired
	private QuizzApi quizzApi;
	

	@RequestMapping(value = "/quizz", method = RequestMethod.GET)
	@ResponseBody
	public List<QuizzView> getAllQuizzes() {
		return quizzApi.findAllQuizzes();
	}
	
	
	@RequestMapping(value = "/quizz/{id}", method = RequestMethod.GET )
	@ResponseBody
	public QuizzView findQuizzById(@PathVariable long id) {
		QuizzView quizz= quizzApi.findQuizzById(id);
		if(quizz!=null) {
			System.out.println("found quizz "+ quizz.getId() +  " name: "+ quizz.getName());
		}
		return quizz;
	}
	
	@RequestMapping(value = "/quizz/{id}", method = RequestMethod.DELETE )
	@ResponseBody
	public void deleteQuizz(@PathVariable long id) {
		 quizzApi.deleteQuizze(id);
	}
	
	@RequestMapping(value = "/quizz", method = RequestMethod.POST)
	@ResponseBody
	public void saveQuizz(@RequestBody Quizz quizz) {
		
		quizzApi.saveQuizz(quizz);	
	}
	
	@RequestMapping(value = "/quizz", method = RequestMethod.PUT)
	@ResponseBody
	public void updateQuizz(@RequestBody Quizz quizz) {
		
		quizzApi.updateQuizz(quizz);	
	}
}
