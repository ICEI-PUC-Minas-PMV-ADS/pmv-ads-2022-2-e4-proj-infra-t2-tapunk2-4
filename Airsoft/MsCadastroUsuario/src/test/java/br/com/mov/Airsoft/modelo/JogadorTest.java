package br.com.mov.Airsoft.modelo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import br.com.mov.Airsoft.repositorio.JogadorRepositorio;

//@DataMongoTest
class JogadorTest {
//	@Autowired
//	private JogadorRepositorio repositorio;
//	private static Jogador jogador;
//
//	//@BeforeAll
//	static void configuracaoInicial() {
//		jogador = new Jogador();
//		jogador.setApelido("Thata");
//		jogador.setDataNasc(LocalDate.parse("2007-12-03"));
//		jogador.setEmail("thais.silva@outlook.com");
//		jogador.setNome("Thais Silva");
//		jogador.setSexo("Feminino");
//	}
//
//	//@Test
//	void deveCriarJogador() {
//		repositorio.save(jogador);
//		assertEquals(jogador, repositorio.findAll().get(0));
//	}
//
//	//@Test
//	void deveAlterarJogador() {
//		Jogador jogador2 = repositorio.findAll().get(0);
//		jogador2.setEmail("thais.silva2@outlookl.com");
//		repositorio.save(jogador2);
//		assertEquals("thais.silva2@outlook.com", repositorio.findAll().get(0).getEmail());
//	}
//
//	//@Test
//	void deveExcluirJogador() {
//		repositorio.delete(jogador);
//		assertEquals(repositorio.findAll().size(), 0);
//	}

}
