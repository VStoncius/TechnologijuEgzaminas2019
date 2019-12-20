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
import ltu.dovanos.api.rest.PresentService;
import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;

@RestController
@RequestMapping("/presents")
@Api (value = "presents")
public class PresentController {

	@Autowired
	private PresentService service;
	
	@GetMapping("/all")
	@ApiOperation(value="Get all presents",notes="Returns all registered presents")
	public List<Present> listAll() {
		return service.retrieveAllPresents();
	}
	
	@GetMapping("/{id}")
	@ApiOperation(value="Get a presents",notes="Returns a registered present by id")
	public Present findPresentByName(String name) {
		return service.getPresentByName(name);
	}
	
	@DeleteMapping("/delete/{id}")
	@ApiOperation(value="create",notes="create a letter")
	@Transactional
	public ResponseEntity<String> deletePresent(@RequestBody Present present) {
		if (service.getPresentByName(present.getName())!=null) {
			service.deletePresent(present);
			return new ResponseEntity<String>("Saved deleted", HttpStatus.OK);
			}
		else 
		return new ResponseEntity<String>("No letter found", HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/create")
	@ApiOperation(value="create",notes="create a present")
	@Transactional
	public ResponseEntity<String> createNewPresent(@RequestBody Present present, Letter letter) {
		System.out.println(present.toString());
		System.out.println(letter.toString());
		if (service.getPresentByName(present.getName())==null) {
			service.createNewPresent(present, letter);
			return new ResponseEntity<String>("Saved succesfully", HttpStatus.CREATED);
			}
		else
		return new ResponseEntity<String>("Failed to save", HttpStatus.CONFLICT);
	}
	
}
