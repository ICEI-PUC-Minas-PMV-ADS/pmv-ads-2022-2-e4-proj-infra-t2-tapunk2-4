# Programação de Funcionalidades

Nesta seção é apresentada apenas o back-end das funcionalidades do sistema.

## Tela de Login (RF-01)



## Tela de Cadastro usuário (RF-2)

O usuário poderá realizar o cadastro de seus dados pessoais, bem como alterar algumas informações ou deletar sua conta.A estruturas de dados utilizada foi baseada em uma API Gateway com JAVA, SpringBoot, MongoDb e Docker. Evidência das funcionalidades:

![1cadastroUsuario](https://user-images.githubusercontent.com/82246327/196059682-4b551e10-fc29-482f-9768-d97aa633c15f.png)

![2listaUsuario](https://user-images.githubusercontent.com/82246327/196059684-3ae6fa7c-d38f-4ca7-9db6-7d116fde85a0.png)

![3alteracaoUsuario](https://user-images.githubusercontent.com/82246327/196059685-1b7e2926-6ab4-4e6b-b167-526ff0a271b3.png)

![4deleteUsuario](https://user-images.githubusercontent.com/82246327/196059686-fd2eec7e-42eb-4458-b2fb-7281c352a49f.png)

### Requisitos atendidos 

* RF-02

### Estrutura de Dados 

#### Controle:
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
	
#### Modelo:
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


## Visualização da tela Adicionar Equipes (RF- 03) 

O usuário poderá realizar o cadastro de uma nova equipe, bem como alterar algumas informações ou deletar a mesma.A estruturas de dados utilizada foi baseada em uma API Gateway com JAVA, SpringBoot, MongoDb e Docker. Evidência das funcionalidades:

![1cadastroEquipe](https://user-images.githubusercontent.com/82246327/196059883-037be64b-9a46-451d-8bae-558aaa2cde09.png)

![2listaEquipe](https://user-images.githubusercontent.com/82246327/196059884-7e1caba4-ac81-4a57-b380-76802e1b1a45.png)

![3alteracaoEquipe](https://user-images.githubusercontent.com/82246327/196059885-fff882e0-66b8-4df5-ad27-799a304c631f.png)

![4deleteEquipe](https://user-images.githubusercontent.com/82246327/196059886-c3b9881e-d89b-4fb9-931a-3e2984617c2e.png)

### Requisitos atendidos 

* RF-03

### Estrutura de Dados 

#### Controle:
	@Controller
	@RequestMapping("cadastroequipe")
	public class Controle {
	@Autowired
	private EquipeRepositorio repositorio;
	@Autowired
	private JogadorCliente existejogador;

	@GetMapping
	public ResponseEntity<List<Equipe>> listarEquipe() {
		List<br.com.mov.Airsoft.modelo.Equipe> lista = repositorio.findAll();
		return ResponseEntity.ok(lista);
		}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Equipe> Equipe(@PathVariable(name = "id") String id) {
		Optional<br.com.mov.Airsoft.modelo.Equipe> opdtionaEquipe = repositorio.findById(id);
		return ResponseEntity.ok(opdtionaEquipe.get());
		}

	@PostMapping
	public ResponseEntity<String> salva(@RequestBody Equipe equipe) {
		List<String> jogadores = equipe.getJogadores();
		for (String email : jogadores) {
			boolean existe = this.existejogador.consultaJogador(email);
			if (!existe) {
				return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Jogador não encontrado: "+ email );
					}
		}
		
		repositorio.insert(equipe);
		return ResponseEntity.status(HttpStatus.CREATED).build();
		}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletar(@PathVariable(name = "id") String id) {
		repositorio.deleteById(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}

	@PutMapping(value = "/{id}")
	public ResponseEntity<String> atualizar(@PathVariable(name = "id") String id, @Validated @RequestBody EquipeDto dto) {
		Optional<Equipe> equipe = repositorio.findById(id);
		Equipe eq = equipe.get();
		
		List<String> jogadores = eq.getJogadores();
		for (String email : jogadores) {
			boolean existe = this.existejogador.consultaJogador(email);
			if (!existe) {
				return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Jogador não encontrado: "+ email );
					}
			}
		eq.setNome(dto.getNome());
		eq.setDescricao(dto.getDescricao());
		eq.setModalidade(dto.getModalidade());
		eq.setJogadores(dto.getJogadores());
		repositorio.save(eq);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}
		
#### Modelo:
	@Getter
	@AllArgsConstructor
	@Setter
	@NoArgsConstructor
	@Document(collection = "Equipe")
		public class Equipe {
		@Id
		private String id;
		private String nome;
		private List <String> jogadores;
		private String modalidade;
		private String descricao;

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Equipe other = (Equipe) obj;
		return Objects.equals(modalidade, other.modalidade) && Objects.equals(descricao, other.descricao)
				&& Objects.equals(nome, other.nome) && Objects.equals(jogadores, other.jogadores);
	}

	@Override
	public int hashCode() {
		return Objects.hash(modalidade, nome, descricao, jogadores);
	}
		


## Visualização da tela Criar Eventos (RF-04/05)  

O usuário poderá realizar o cadastro de um nova evento/torneio, bem como alterar algumas informações, deletar e listar os eventos disponíveis.A estruturas de dados utilizada foi baseada em uma API Gateway com JAVA, SpringBoot, MongoDb e Docker. Evidência das funcionalidades:

![1cadastroEvento](https://user-images.githubusercontent.com/82246327/196060278-6a1e8852-61a6-4baa-a445-18972ffbb6f5.png)
	
![2listaEvento](https://user-images.githubusercontent.com/82246327/196060279-3ec39887-243c-4479-9e03-3ece0a753cfc.png)
	
![3alteraçãoEvento](https://user-images.githubusercontent.com/82246327/196060281-e66ca595-1482-4523-8e28-cc16e76db846.png)
	
![4deletandoEvento](https://user-images.githubusercontent.com/82246327/196060282-017e9ef2-3d37-4055-8355-3041c3caa8f1.png)

### Requisitos atendidos 

* RF-04
* RF-05

### Estrutura de Dados 
	
#### Controle:
      	@Controller
	@RequestMapping("cadastroevento")
	public class Controle {
		@Autowired
		private EventoRepositorio repositorio;

	@GetMapping	
	public ResponseEntity<List<Evento>> listarEvento() {
		List<br.com.mov.Airsoft.modelo.Evento> lista = repositorio.findAll();
		return ResponseEntity.ok(lista);
		}

	@GetMapping(value = "/{id}")
		public ResponseEntity<Evento> Evento(@PathVariable(name = "id") String id) {
		Optional<br.com.mov.Airsoft.modelo.Evento> opdtionaEvento = repositorio.findById(id);
		return ResponseEntity.ok(opdtionaEvento.get());
	}

	@PostMapping
	public ResponseEntity<Void> salva(@RequestBody Evento evento) {
		repositorio.insert(evento);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletar(@PathVariable(name = "id") String id) {
		repositorio.deleteById(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Void> atualizar(@PathVariable(name = "id") String id, @Validated @RequestBody EventoDto dto) {
		Optional<Evento> evento = repositorio.findById(id);
		Evento ev = evento.get();
		ev.setDataEvento(dto.getDataEvento());
		ev.setDescricao(dto.getDescricao());
		ev.setModalidade(dto.getModalidade());
		repositorio.save(ev);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
#### Modelo:

	@Getter
	@AllArgsConstructor
	@Setter
	@NoArgsConstructor
	@Document(collection = "Evento")
	public class Evento {
		@Id
		private String id;
		@DateTimeFormat(pattern = "dd/MM/yyyy")
		@JsonFormat(pattern = "dd/MM/yyyy")
		private LocalDate dataEvento;
		private String modalidade;
		private String descricao;

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Evento other = (Evento) obj;
		return Objects.equals(modalidade, other.modalidade) && Objects.equals(dataEvento, other.dataEvento)
				&& Objects.equals(descricao, other.descricao);
	}

	@Override
	public int hashCode() {
		return Objects.hash(modalidade, descricao, dataEvento);
	}
