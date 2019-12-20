package ltu.dovanos.persitence.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ltu.dovanos.api.rest.LetterService;
import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;

@RestController
@RequestMapping("/letters")
@Api (value = "letters")
public class LetterController {

	@Autowired
	private LetterService service;
	
	@GetMapping("/all")
	@ApiOperation(value="Get letters",notes="Returns all letters")
	public List<Letter> listAll() {
		return service.retrieveAllLetters();
	}

	@DeleteMapping("/delete/{id}")
	@ApiOperation(value="create",notes="create a letter")
	@Transactional
	public ResponseEntity<String> deleteLetter(@RequestBody Letter letter) {
		if (service.getLetterByName(letter.getName())!=null) {
			service.deleteLetter(letter);
			return new ResponseEntity<String>("Saved deleted", HttpStatus.OK);
			}
		else 
		return new ResponseEntity<String>("No letter found", HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/create")
	@ApiOperation(value="create",notes="create a letter")
	@Transactional
	public ResponseEntity<String> createNewLetter(@RequestBody Letter letter) {
		if (service.getLetterByName(letter.getName())==null) {
			service.createNewLetter(letter);
			return new ResponseEntity<String>("Saved succesfully", HttpStatus.CREATED);
			}
		else 
		return new ResponseEntity<String>("Failed to create user", HttpStatus.CONFLICT);
	}
	
}
