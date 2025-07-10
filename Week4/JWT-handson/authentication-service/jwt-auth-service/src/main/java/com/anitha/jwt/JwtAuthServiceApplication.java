package com.anitha.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtAuthServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(JwtAuthServiceApplication.class, args);
        System.out.println("JWT Auth Service is running!");
    }
}
