package com.bouacheria.funquizz.domain.model;

public class QizzResponse {

	private String value;
    private boolean correct;
    
	public QizzResponse() {
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public boolean isCorrect() {
		return correct;
	}

	public void setCorrect(boolean correct) {
		this.correct = correct;
	}

}
