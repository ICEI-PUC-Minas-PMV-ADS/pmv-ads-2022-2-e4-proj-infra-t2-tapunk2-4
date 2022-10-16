package br.com.mov.Airsoft.controle;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class JogadorDto {
	@NotNull
	private String nome;
	@NotNull
	private String apelido;
	@NotNull
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataNasc;
	@NotNull
	private String sexo;
}
