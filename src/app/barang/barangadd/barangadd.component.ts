import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { BarangModel } from './barangadd.model'

@Component({
  selector: 'app-barangadd',
  templateUrl: './barangadd.component.html',
  styleUrls: ['./barangadd.component.css']
})
export class BarangaddComponent implements OnInit {

  dataAdd : BarangModel;
  dataKategori : Object;
  dataMerk : Object;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new BarangModel();
    //this.dataAdd.KdKategoriBarang="0";
    console.log(this.dataAdd.KdKategoriBarang);
    this.http.get("http://localhost:8889/api/kategoribarang")
    .subscribe((res:Response) => {
      this.dataKategori = res.json();
      console.log(this.dataKategori);
    })
  }

  onSelect(kdKategori){
    debugger;
    if(kdKategori != 0){
      this.http.get("http://localhost:8889/api/kategoribarang/"+kdKategori)
      .subscribe((res:Response) => {
        this.dataMerk = res.json().MerkBarang;
        this.dataAdd.KdKategoriBarang = res.json().KdKategoriBarang;
        this.dataAdd.GambarBarang = "gambar "+ res.json().NamaKategoriBarang;
        console.log(this.dataMerk);
      })
    }else{
      this.dataMerk=[];
    }
  }

  onSelectMerk(kdmerk){
    this.dataAdd.KdMerkBarang = kdmerk;
  }

  postBarang(dataAdd){
    debugger;
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    // this.http.post("https://elektronik124.herokuapp.com/api/barang", JSON.stringify(dataAdd), opsi)
    this.http.post("http://localhost:8889/api/barang", JSON.stringify(dataAdd), opsi)
    .subscribe((res:Response) => {
      debugger;
      window.location.href='./barang';
    })
  }

}
