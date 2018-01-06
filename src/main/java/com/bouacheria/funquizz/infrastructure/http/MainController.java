package com.bouacheria.funquizz.infrastructure.http;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@RequestMapping("/show")
	public String hi() {
		return "Hello World from Restful API";
	}

}
