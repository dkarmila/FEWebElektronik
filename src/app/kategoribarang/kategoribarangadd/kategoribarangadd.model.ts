import { Component } from '@angular/core';
import { Http } from '@angular/http';

export class KategoriModel{
    public KdKategoriBarang : string;
    public NamaKategoriBarang : string;
    public MerkBarang : [ 
        {
            KdMerkBarang : string;
            NamaMerkBarang : string;
        }
    ]
}

export class MerkModel{
    
            public KdMerkBarang : string;
            public NamaMerkBarang : string;
}