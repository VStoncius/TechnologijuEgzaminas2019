package ltu.dovanos.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ltu.dovanos.persitence.domain.Letter;
import ltu.dovanos.persitence.domain.Present;


public interface LetterRepository extends JpaRepository<Letter, Long>{
	Letter getLetterByName(String name);
}
