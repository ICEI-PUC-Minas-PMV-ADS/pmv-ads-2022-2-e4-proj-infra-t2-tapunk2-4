package br.com.mov.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.mov.models.Usuario;
import br.com.mov.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder encoder;

    public UsuarioController(UsuarioRepository usuarioRepository, PasswordEncoder encoder) {
        this.usuarioRepository = usuarioRepository;
        this.encoder = encoder;
    }

    /**
     * PROTEGIDO JWT
     * @return
     */
    @GetMapping
    public ResponseEntity<List<Usuario>> listar() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }

    /**
     * NÃO PROTEGIDO
     * @param usuario
     * @return
     */
    @PostMapping
    public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario) {
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return ResponseEntity.ok(usuarioRepository.save(usuario));
    }


    /**
     * PROTEGIDO JWT
     * @param login
     * @param password
     * @return
     */
    @GetMapping("/validar")
    public ResponseEntity<Boolean> validarSenha(@RequestParam String login,
                                                @RequestParam String password) {
       Optional<Usuario> usuario = usuarioRepository.findByLogin(login);

       if(usuario.isEmpty()) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
       }

       boolean valid = encoder.matches(password, usuario.get().getPassword());

       return ResponseEntity.ok(valid);

    }

}
