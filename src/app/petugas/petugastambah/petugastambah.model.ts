import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class PetugasModel {
    public _id: string;
    public KdPetugas: string;
    public NamaPetugas: string;
    public AlamatPetugas: string;
    public NoTelp:string;
    public NoRmh:string;
    public UsernamePetugas: string;
    public PasswordPetugas: string;
}
