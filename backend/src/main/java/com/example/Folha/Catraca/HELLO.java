package com.example.Folha.Catraca;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/HELLO")
public class HELLO {

    @GetMapping("/MENSAGEM")
    public String holla() {

        return "holla mundo";

    }


}