
package ltu.dovanos.persitence.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Letter implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private Long id;
	
	@Column
	private String name;
	@Column
	private String surname;
	@Column
	private String city;
	@Column
	private String country;
	@Column 
	private String adress;
	@Column
	private String body;
	@OneToMany
	private List<Present> presentList = new ArrayList();
	
	
	public Letter(Long id, String name, String surname, String city, String country, String adress, String body,
			List<Present> presentList) {
		super();
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.city = city;
		this.country = country;
		this.adress = adress;
		this.body = body;
		this.presentList = presentList;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSurname() {
		return surname;
	}


	public void setSurname(String surname) {
		this.surname = surname;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getAdress() {
		return adress;
	}


	public void setAdress(String adress) {
		this.adress = adress;
	}


	public String getBody() {
		return body;
	}


	public void setBody(String body) {
		this.body = body;
	}


	public List<Present> getPresentList() {
		return presentList;
	}


	public void setPresentList(List<Present> presentList) {
		this.presentList = presentList;
	}


	public Letter() {	
	}
		
	}
	