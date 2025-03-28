package com.example.Folha.Catraca;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class VistoriarEntity {
    @Id
    private Long id;

    private LocalDate data;  // Alterando para LocalDate
    private Long catracaFisica;
    private Long catracaEletronica;
    private Boolean isClose;

    public VistoriarEntity() {}

    public VistoriarEntity(Long id, LocalDate data, Long catracaFisica, Long catracaEletronica, Boolean isClose) {
        this.id = id;
        this.data = data;
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

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
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

    public Boolean getIsClose() {
        return isClose;
    }

    public void setIsClose(Boolean isClose) {
        this.isClose = isClose;
    }

    @Override
    public String toString() {
        return "VistoriarEntity{" +
                "id=" + id +
                ", data=" + data +
                ", catracaFisica=" + catracaFisica +
                ", catracaEletronica=" + catracaEletronica +
                ", isClose=" + isClose +
                '}';
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