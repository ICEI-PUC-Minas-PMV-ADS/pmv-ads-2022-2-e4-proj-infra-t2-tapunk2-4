package br.com.mov.Airsoft.repositorio;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import br.com.mov.Airsoft.modelo.Equipe;

@Repository
public interface EquipeRepositorio extends MongoRepository<Equipe, String> {

}
