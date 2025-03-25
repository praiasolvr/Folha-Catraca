package com.example.Folha.Catraca;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VistoriarRepository extends JpaRepository<VistoriarEntity,Long> {

}
