package ltu.dovanos.api.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;
import ltu.dovanos.persitence.repositories.LetterRepository;
import ltu.dovanos.persitence.repositories.PresentRepository;


//Logic goes here!!!!
@Service
public class LetterService {
	@Autowired
	private LetterRepository letterRepository;

	
	public List<Letter> retrieveAllLetters() {
		return letterRepository.findAll();
	}
	
	public Letter createNewLetter(Letter letter) {
		return letterRepository.save(letter);

	}

	public Letter getLetterByName(String name) {
		return letterRepository.getLetterByName(name);
	}

	public void deleteLetter(Letter letter) {
		letterRepository.delete(letter);
		
	}
}
