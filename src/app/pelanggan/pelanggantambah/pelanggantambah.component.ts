import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { PelangganModel } from './pelanggantambah.model';

@Component({
  selector: 'app-pelanggantambah',
  templateUrl: './pelanggantambah.component.html',
  styleUrls: ['./pelanggantambah.component.css']
})
export class PelanggantambahComponent implements OnInit {
  dataTambah : PelangganModel;
  constructor(private http: Http, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.dataTambah = new PelangganModel();
    }
    postPelanggan(dataTambah){
      if(this.dataTambah.KdPelanggan==null || this.dataTambah.NamaPelanggan==null || 
        this.dataTambah.AlamatPelanggan==null || this.dataTambah.UsernamePelanggan==null || 
        this.dataTambah.PasswordPelanggan==null){
        alert("Inputan Jangan Kosong Pakk");
      } else if(this.dataTambah.NoRmh == null && this.dataTambah.NoTelp==null){
        alert("No telp / No rumah salah satu harus terisi Pakk");
      }else if(this.dataTambah.NoTelp > 9999999999999){
        alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
      }else if(this.dataTambah.NoRmh > 99999999999){
        alert("No Rumah Melebihi Batas");
      } else {
        debugger;
        let header = new Headers({"Content-Type":"application/json"});
        let opsi = new RequestOptions({headers:header});
        debugger;
        this.http.post("https://elektronik124.herokuapp.com/api/pelanggan", JSON.stringify(dataTambah), opsi)
        .subscribe((res:Response) => {
          debugger;
          window.location.href='./pelanggan';
          alert("Berhasil ditambahkan");
        })
      }
    }
}
