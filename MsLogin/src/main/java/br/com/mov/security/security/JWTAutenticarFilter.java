package br.com.mov.security.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.mov.security.data.DetalheUsuarioData;
import br.com.mov.security.models.Usuario;

/**
 * Responsavel por autenticar o usuário e gerar o token jwt
 */
public class JWTAutenticarFilter extends UsernamePasswordAuthenticationFilter {

    public static final int EXPIRACAO = 1000_00;
    public static final String TOKEN_ENCRIPT = "c19b8d81-b5c6-4f7e-9e39-94572138117c"; // Isso deve está no arquivo de configuração

    private final AuthenticationManager authenticationManager;

    public JWTAutenticarFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    /**
     * Execulta a autenticação
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        try {
            Usuario usuario = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getLogin(),
                    usuario.getPassword(),
                    new ArrayList<>()));
        } catch (IOException e) {
            throw new RuntimeException("Error ao tutenticar usuário", e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {
        DetalheUsuarioData usuarioData = (DetalheUsuarioData) authResult.getPrincipal();

        String token = JWT.create().withSubject(usuarioData.getUsername())
        .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRACAO))
        .sign(Algorithm.HMAC512(TOKEN_ENCRIPT));

        response.getWriter().write(token);
        response.getWriter().flush();

    }
}
