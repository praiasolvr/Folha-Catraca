package com.example.Folha.Catraca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/vistorias")
public class VistoriarCatracaController {

    @Autowired
    private VistoriarCatracaService service ;


    @GetMapping
    public String test () {
        return "test" ;
    }

    @PostMapping
    public ResponseEntity<VistoriarEntity> insert(@RequestBody VistoriarEntity obj){
        obj = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }
}
