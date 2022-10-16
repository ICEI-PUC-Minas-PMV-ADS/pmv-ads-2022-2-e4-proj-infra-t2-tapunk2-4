package br.com.mov.Airsoft.controle;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mov.Airsoft.modelo.Jogador;
import br.com.mov.Airsoft.repositorio.JogadorRepositorio;

@RestController
@RequestMapping("usuario")
public class Controle {
	@Autowired
	private JogadorRepositorio repositorio;

	@GetMapping
	public ResponseEntity<List<Jogador>> listarJogadores() {
		List<Jogador> lista = repositorio.findAll();
		return ResponseEntity.ok(lista);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Jogador> Jogador(@PathVariable(name = "id") String id) {
		Optional<br.com.mov.Airsoft.modelo.Jogador>opdtionaJogador = repositorio.findById(id);
		return ResponseEntity.ok(opdtionaJogador.get());
		}
	
	@GetMapping(value = "email/{email}")
	public Boolean existeJogador(@PathVariable(name = "email") String email) {
		Boolean existsByEmail = repositorio.existsByEmail(email);
		return existsByEmail;
		}

	@PostMapping
	public ResponseEntity<Void> salva(@RequestBody Jogador jogador) {
		repositorio.insert(jogador);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletar(@PathVariable(name = "id") String id) {
		repositorio.deleteById(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Void> atualizar(@PathVariable(name = "id") String id,
			@Validated @RequestBody JogadorDto dto) {
		Optional<Jogador> jogador = repositorio.findById(id);
		Jogador jog = jogador.get();
		jog.setNome(dto.getNome());
		jog.setApelido(dto.getApelido());
		jog.setDataNasc(dto.getDataNasc());
		jog.setSexo(dto.getSexo());
		repositorio.save(jog);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
}
