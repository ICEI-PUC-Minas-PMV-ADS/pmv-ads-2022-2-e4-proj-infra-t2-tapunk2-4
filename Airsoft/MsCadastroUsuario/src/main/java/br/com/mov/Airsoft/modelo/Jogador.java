package br.com.mov.Airsoft.modelo;

import java.time.LocalDate;
import java.util.Objects;

import javax.validation.constraints.Email;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
@Document(collection = "Jogador")
public class Jogador {
	@Id
	private String id;
	private String nome;
	private String apelido;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataNasc;
	private String sexo;
	@Email
	private String email;
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Jogador other = (Jogador) obj;
		return Objects.equals(apelido, other.apelido) && Objects.equals(dataNasc, other.dataNasc)
				&& Objects.equals(email, other.email) && Objects.equals(nome, other.nome)
				&& Objects.equals(sexo, other.sexo);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(apelido, dataNasc, email, nome, sexo);
	} 
}
