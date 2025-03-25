package com.example.Folha.Catraca;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class VistoriarEntity {
    @Id
    private Long id;

    private Long catracaFisica;
    private Long catracaEletronica;
    private Boolean isClose;

    public VistoriarEntity() {

    }

    public VistoriarEntity(Long id, Long catracaFisica, Long catracaEletronica, Boolean isClose) {
        this.id = id;
        this.catracaFisica = catracaFisica;
        this.catracaEletronica = catracaEletronica;
        this.isClose = isClose;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCatracaFisica() {
        return catracaFisica;
    }

    public void setCatracaFisica(Long catracaFisica) {
        this.catracaFisica = catracaFisica;
    }

    public Long getCatracaEletronica() {
        return catracaEletronica;
    }

    public void setCatracaEletronica(Long catracaEletronica) {
        this.catracaEletronica = catracaEletronica;
    }

    public Boolean getClose() {
        return isClose;
    }

    public void setClose(Boolean close) {
        isClose = close;
    }

    @Override
    public String toString() {
        return super.toString();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
