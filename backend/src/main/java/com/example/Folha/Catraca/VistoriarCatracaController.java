package com.example.Folha.Catraca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/vistorias")
public class VistoriarCatracaController {

    @Autowired
    private VistoriarCatracaService service;

    @GetMapping
    public ResponseEntity<List<VistoriarEntity>> findAll() {
        List<VistoriarEntity> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<VistoriarEntity> insert(@RequestBody VistoriarEntity obj) {
        // Aqui, a data será automaticamente tratada pelo Spring para LocalDate
        obj = service.insert(obj);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(obj.getId())
                .toUri();
        return ResponseEntity.created(uri).body(obj);
    }
}