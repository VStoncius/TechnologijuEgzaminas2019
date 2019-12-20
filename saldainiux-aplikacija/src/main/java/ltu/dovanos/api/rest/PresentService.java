package ltu.dovanos.api.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltu.dovanos.persitence.controllers.PresentCreatorInfo;
import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;
import ltu.dovanos.persitence.repositories.LetterRepository;
import ltu.dovanos.persitence.repositories.PresentRepository;


//Logic goes here!!!!
@Service
public class PresentService {
	@Autowired
	private PresentRepository presentRepository;
	@Autowired
	private LetterService letterService;

	
	public List<Present> retrieveAllPresents() {
		return presentRepository.findAll();
	}
	
	public Present getPresentByName(String name) {
		return presentRepository.getPresentByName(name);
	}
	
	public Present createNewPresent(Present present, Letter letter) {
		Present tmpPresent = presentRepository.save(present);
		tmpPresent.setLetter(letterService.createNewLetter(letter));
		return tmpPresent;
		}

	public void deletePresent(Present present) {
		presentRepository.delete(present);
		
	}
}
