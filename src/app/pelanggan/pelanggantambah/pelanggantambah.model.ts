import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class PelangganModel {
    public _id: string;
    public KdPelanggan: string;
    public NamaPelanggan: string;
    public AlamatPelanggan: string;
    public NoTelp:number;
    public NoRmh:number;
    public UsernamePelanggan: string;
    public PasswordPelanggan: string;
}
