import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class PembelianModel {
    public _id: string;
    public KdPembelian: string;
    public KdPetugas: string;
    public TglPembelian: Date;
    public JmlItem: number;
    public TotalHargaBeli: number;
    public StatusPembayaran: boolean;
}