package com.bouacheria.funquizz.infrastructure.http;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	@RequestMapping(value = "/quizz", method = RequestMethod.POST)
	public String saveQuizz() {
		return "Saving Quizz";
	}
	
	
	@RequestMapping(value = "/quizz", method = RequestMethod.GET)
	@ResponseBody
	public String getQuizz1() {
		
		System.out.println(JSON_QUIZZ_ARRAY);
		return JSON_QUIZZ;
		//return "getting Quizz";
	}

}
