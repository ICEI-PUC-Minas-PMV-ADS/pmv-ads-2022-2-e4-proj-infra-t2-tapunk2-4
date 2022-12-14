package br.com.mov.services;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import br.com.mov.data.DetalheUsuarioData;
import br.com.mov.models.Usuario;
import br.com.mov.repositories.UsuarioRepository;

/**
 * Serviço de consulta do usuário
 */
@Component
public class DetalheUsuarioServiceImpl implements UserDetailsService {


    private final UsuarioRepository usuarioRepository;

    public DetalheUsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByLogin(username);
        if (usuario.isEmpty()) {
            throw new UsernameNotFoundException("Usuario " + username + " Não encontrato");
        }
        return new DetalheUsuarioData(usuario);
    }

}
