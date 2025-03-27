package com.example.Folha.Catraca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VistoriarCatracaService {
    @Autowired
    private VistoriarRepository repository;

    public VistoriarEntity insert(VistoriarEntity obj){
        return repository.save(obj);
    }
}
