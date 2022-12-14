package br.com.mov.Airsoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MsCasdastroEventoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsCasdastroEventoApplication.class, args);
	}

}
