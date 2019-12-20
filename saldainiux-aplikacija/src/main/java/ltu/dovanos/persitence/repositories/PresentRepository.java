package ltu.dovanos.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ltu.dovanos.persitence.domain.Present;

public interface PresentRepository extends JpaRepository<Present, Long>{
	Present getPresentByName(String name);
}
