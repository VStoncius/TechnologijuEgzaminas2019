




package ltu.dovanos.persitence.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Present implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private Long id;
	@Column
	private String type;
	@Column
	private String name;
	@Column
	private String description;
	@Column
	private String imageURL;
	@Column
	private boolean forAdults;
	@ManyToOne
	private Letter letter = new Letter();
	

	public Present(Long id, String type, String name, String description, String imageURL, boolean forAdults,
			Letter letter) {
		super();
		this.id = id;
		this.type = type;
		this.name = name;
		this.description = description;
		this.imageURL = imageURL;
		this.forAdults = forAdults;
		this.letter = letter;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImageURL() {
		return imageURL;
	}


	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}


	public boolean isForAdults() {
		return forAdults;
	}


	public void setForAdults(boolean forAdults) {
		this.forAdults = forAdults;
	}


	public Letter getLetter() {
		return letter;
	}


	public void setLetter(Letter letter) {
		this.letter = letter;
	}


	public Present() {
		
	}
	
}
