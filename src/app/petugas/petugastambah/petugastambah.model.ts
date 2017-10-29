import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class PetugasModel {
    public _id: string;
    public KdPetugas: string;
    public NamaPetugas: string;
    public AlamatPetugas: string;
<<<<<<< HEAD
    public NoTelp:number;
    public NoRmh:number;
=======
    public NoTelp:string;
    public NoRmh:string;
>>>>>>> 21965c8af443192ae54bf6d1776a4808c9201bc8
    public UsernamePetugas: string;
    public PasswordPetugas: string;
}
