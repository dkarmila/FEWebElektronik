import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { PetugasModel } from './petugastambah.model';

@Component({
  selector: 'app-petugastambah',
  templateUrl: './petugastambah.component.html',
  styleUrls: ['./petugastambah.component.css']
})
export class PetugastambahComponent implements OnInit {
  dataTambah : PetugasModel;
  nama: String;
  constructor(private http: Http, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.dataTambah = new PetugasModel();
    }
    postPetugas(dataTambah){
      if(this.dataTambah.KdPetugas==null || this.dataTambah.NamaPetugas==null || 
        this.dataTambah.AlamatPetugas==null || this.dataTambah.UsernamePetugas==null || 
        this.dataTambah.PasswordPetugas==null){
        alert("Inputan Jangan Kosong Pakk");
      } else if(this.dataTambah.NoRmh == null && this.dataTambah.NoTelp==null){
        alert("No telp / No rumah salah satu harus terisi Pakk");
      }else if(this.dataTambah.NoTelp > '9999999999999'){
        alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
      }else if(this.dataTambah.NoRmh > '99999999999'){
        alert("No Rumah Melebihi Batas");
      } else {
        this.http.get("https://elektronik124.herokuapp.com/api/namapetugas/"+this.dataTambah.NamaPetugas)
        .subscribe((res:Response) => {
            this.nama = res.json();
            if(this.nama == ""){
              debugger;
              let header = new Headers({"Content-Type":"application/json"});
              let opsi = new RequestOptions({headers:header});
              this.http.post("https://elektronik124.herokuapp.com/api/petugas", JSON.stringify(dataTambah), opsi)
              .subscribe((res:Response) => {
                window.location.href='./petugas';
                alert("Berhasil ditambahkan");
              })
            } else {
              alert('nama sudah ada');  
            }
        })
      }
    }
}
