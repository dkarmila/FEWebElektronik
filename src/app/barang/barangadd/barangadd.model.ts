import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class BarangModel {
    public _id: string;
    public KdBarang: string;
    public KdKategoriBarang: string;
    public KdMerkBarang: string;
    public TypeBarang: string;
    public StokAwal: number;
    public StokAkhir: number;
    public HargaBarang: number;
}