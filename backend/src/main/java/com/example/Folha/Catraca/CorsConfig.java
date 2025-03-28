package com.example.Folha.Catraca;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permitir CORS para o frontend com URL 'http://10.10.10.229:5173'
        registry.addMapping("/api/**") // Aplica para todas as requisições no caminho '/api/**'
                .allowedOrigins("http://10.10.10.229:5173") // Adicione a origem que você quer permitir
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos permitidos
                .allowedHeaders("*") // Permite todos os cabeçalhos
                .allowCredentials(true); // Permite credenciais (se necessário)
    }
}