package br.com.mov.Airsoft.repositorio;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import br.com.mov.Airsoft.modelo.Jogador;

@Repository
public interface JogadorRepositorio extends MongoRepository<Jogador, String>{

	Boolean existsByEmail(String email);
	
}