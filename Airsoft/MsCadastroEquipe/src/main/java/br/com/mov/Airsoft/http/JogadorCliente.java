package br.com.mov.Airsoft.http;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(value = "msusuario", url="http://localhost:8080/msusuario/usuario")
public interface JogadorCliente {
	@RequestMapping(method=RequestMethod.GET, value = "/email/{email}")
	Boolean consultaJogador (@PathVariable String email);
}
