package com.example.Folha.Catraca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VistoriarCatracaService {
    @Autowired
    private VistoriarRepository repository;

    public List<VistoriarEntity> findAll(){
        return repository.findAll();
    }


    public VistoriarEntity insert(VistoriarEntity obj){
        return repository.save(obj);
    }

    public VistoriarEntity findById(Long id){
        Optional<VistoriarEntity> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

}
