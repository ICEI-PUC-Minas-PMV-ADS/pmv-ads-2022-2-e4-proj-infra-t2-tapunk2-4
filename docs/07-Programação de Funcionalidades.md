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

O usuário poderá realizar o cadastro de seus de uma nova equipe, bem como alterar algumas informações ou deletar a mesma.A estruturas de dados utilizada foi baseada em uma API Gateway com JAVA, SpringBoot, MongoDb e Docker. Evidência das funcionalidades:

![1cadastroEquipe](https://user-images.githubusercontent.com/82246327/196059883-037be64b-9a46-451d-8bae-558aaa2cde09.png)

![2listaEquipe](https://user-images.githubusercontent.com/82246327/196059884-7e1caba4-ac81-4a57-b380-76802e1b1a45.png)

![3alteracaoEquipe](https://user-images.githubusercontent.com/82246327/196059885-fff882e0-66b8-4df5-ad27-799a304c631f.png)

![4deleteEquipe](https://user-images.githubusercontent.com/82246327/196059886-c3b9881e-d89b-4fb9-931a-3e2984617c2e.png

### Requisitos atendidos 

* RF-03

### Estrutura de Dados 

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
		
		


## Visualização da tela Criar Eventos (RF-04)  

Na tela da home-Page será possível o usuário acessa a tela de “Criar Eventos”, a estruturas de dados utilizada foi baseada em HMTL e CSS. Exemplo da tela Criar Eventos:

![tela Criar Eventos](img/tela_criarevento.png)

### Requisitos atendidos 

* RF-04


### Estrutura de Dados 

      <main class="cadevent">
    <section class="container produtos">
      <h2 class="d-flex justify-content-center">ADICIONE SEU EVENTO</h2>
      <img src="assets/images/googlemapevento.jpeg" alt="fotocriaevent"
        class="fotoevent img-fluid d-flex justify-content-center">
      <div class="formulario">
        <form method="post" id="formulario" action="#">
          <fieldset id="dados">
            <p><label for="event">Data: </label><input type="date" name="teven" id="event"></p>
            <p><label for="pais">Pais: </label><input type="text" name="tpais" id="pais" size="20" required></p>
            <p><label for="cidade">Cidade: </label><input type="text" name="tcid" id="cidade" size="40"></p>
            <p><label for="uf">UF</label>
              <select name="uf" id="uf" required>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="GO">GO</option>
                <option value="SC">SC</option>
                <option value="PR">PR</option>
              </select>
            </p>
            <p><label for="ender">Endereço:</label><input type="text" name="tender" id="ender" size="20"></p>
          </fieldset>
          <p><label for="tipoeve">Tipo do Evento: </label>
            <select name="select" id="tipoeve">
              <option selected disabled value="">Escolha</option>
              <option value="SK">Skirmish</option>
              <option value="MI">Milsim</option>
              <option value="DM">Deathmatch</option>
              <option value="CB">Capture the Flag</option>
              <option value="MH">Man Hunt</option>
              <option value="HT">Hostage</option>
            </select>
          </p>
          <label for="descr">Descrição do Evento</label>
          <textarea name="descr" id="descr" cols="50" rows="10"></textarea>
          <div class="d-flex justify-content-center">
            <button type="submit" name="botao" id="botao" value="enviar">CADASTRAR</button>
          </div>
        </form>
      </div>
    </section>
      </main>

 


## Visualização da tela Eventos Disponíveis (RF-08/05)

O usuário poderá realizar o cadastro de seus dados pessoais, bem como alterar alguma informação ou deletar sua conta.A estruturas de dados utilizada foi baseada em uma API Gateway com JAVA, SpringBoot, MongoDb e Docker. Evidência das funcionalidades:

![tela Eventos Disponíveis](img/tela_eventosdisponiveis.png)

### Requisitos atendidos 

* RF-08
* RF-05
  
### Estrutura de Dados 

      <main class="container-eventos">
    <section class="container produtos">
      <article>
        <h2 class="d-flex justify-content-center">EVENTOS DISPONÍVEIS</h2>

        <div class="conteudo-eventos1 row justify-content-between">
          <figure class="figure col-md-5">
            <img src="assets/images/googlemapevento.jpeg"
              class="imagem3 figure-img img-fluid col-xl-10 col-lg-10 col-md-12 nav-item d-flex align-items-center"
              alt="imagem do mapa do do local do evento">
          </figure>
          <div class="texto1 col-sm-7">
            <p> <strong>Airsoft Day</strong><br /> Evento das melhores equipes
              em São Paulo,venha e se junte a nós nesta
              aventura. Será na região de Mogi das Cruzes no dia 01/10/2021 ás
              08h00 encontre uma equipe ou traga a sua.</p>
            <div class="d-flex justify-content-center">
              <button type="submit" name="botao" id="botao" value="enviar"> Clique aqui para participar desse
                evento</button>
            </div>
          </div>
        </div>

        <div class="conteudo-eventos2 row justify-content-between">
          <figure class="figure col-md-5">
            <img src="assets/images/googlemapevento.jpeg"
              class="imagem3 figure-img img-fluid col-xl-10 col-lg-10 col-md-12 nav-item d-flex align-items-center"
              alt="imagem do mapa do do local do evento">
          </figure>
          <div class="texto2 col-sm-7">
            <p> <strong>Batalha de Airsoft</strong><br /> Não perca esta
              oportunidade de explorar suas emoções, se cadastre e venha pra ZL. Parque do Carmo em Itaquera - SP dia
              01/11/2021 as 10h.</p>
            <div class="d-flex justify-content-center">
              <button type="submit" name="botao" id="botao" value="enviar"> Clique aqui para participar desse
                evento</button>
            </div>
          </div>
        </div>
        <div class="conteudo-eventos3 row justify-content-between">
          <figure class="figure col-md-5">
            <img src="assets/images/googlemapevento.jpeg"
              class="imagem3 figure-img img-fluid col-xl-10 col-lg-10 col-md-12 nav-item d-flex align-items-center"
              alt="imagem do mapa do do local do evento">
          </figure>
          <div class="texto3 col-sm-7">
            <p><strong>MovAirsoft</strong> <br />Antes de iniciar como jogador,
              é importante estar atento a algumas dicas importantes.Separamos algumas dicas para te ajudar, venha
              participar do nosso evento e fazer parte
              desta aventura. Ibiapuera SP dia 25/12/2021 ás 09h30.</p>
            <div class="d-flex justify-content-center">
              <button type="submit" name="botao" id="botao" value="enviar"> Clique aqui para participar desse
                evento</button>
            </div>
          </div>
        </div>
    </section>
    </article>
      </main>


