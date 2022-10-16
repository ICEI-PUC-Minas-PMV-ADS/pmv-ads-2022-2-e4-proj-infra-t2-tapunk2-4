package br.com.mov.Airsoft.repositorio;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import br.com.mov.Airsoft.modelo.Evento;

@Repository
public interface EventoRepositorio extends MongoRepository<Evento, String>{

}
