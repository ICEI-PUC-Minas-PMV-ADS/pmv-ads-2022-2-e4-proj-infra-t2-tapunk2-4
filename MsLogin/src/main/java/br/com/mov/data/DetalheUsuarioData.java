package br.com.mov.data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.mov.models.Usuario;

/**
 * Implementação dos dados do usuário com base na interfaço do spring security
 */
public class DetalheUsuarioData  implements UserDetails{

    private final Optional<Usuario> usuario;

    public DetalheUsuarioData(Optional<Usuario> usuario) {
        this.usuario = usuario;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return new ArrayList<>();
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return usuario.orElse(new Usuario()).getPassword() ;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return usuario.orElse(new Usuario()).getLogin() ;
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

}
