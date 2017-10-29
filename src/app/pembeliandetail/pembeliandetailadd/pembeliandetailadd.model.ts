import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class PembelianModel {
    public _id: string;
    public KdPembelianDetail: string;
    public KdPembelian: string;
    public KdBarang: string;
    public JmlBarangBeli: number;
    public HargaBeli: number;
    public SubTotalBeli: number;
}