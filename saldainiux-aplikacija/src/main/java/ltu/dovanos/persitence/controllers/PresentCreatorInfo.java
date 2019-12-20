package ltu.dovanos.persitence.controllers;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;

public class PresentCreatorInfo {
	
	private Present present;
	private Letter letter;
	
	
	public Present getPresent() {
		return present;
	}


	public void setPresent(Present present) {
		this.present = present;
	}


	public Letter getLetter() {
		return letter;
	}


	public void setLetter(Letter letter) {
		this.letter = letter;
	}


	public PresentCreatorInfo(Present present, Letter letter) {
		super();
		this.present = present;
		this.letter = letter;
	}


	public PresentCreatorInfo() {};
	
}
