import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { KategoriModel, MerkModel } from './kategoribarangadd.model';

@Component({
  selector: 'app-kategoribarangadd',
  templateUrl: './kategoribarangadd.component.html',
  styleUrls: ['./kategoribarangadd.component.css']
})
export class KategoribarangaddComponent implements OnInit {

  dataAdd: KategoriModel;
  jmlMerk: Object;
  index: number;
  dataMerk: MerkModel[];
  temp: MerkModel[];
  constructor(private http: Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new KategoriModel();
    this.dataMerk=[new MerkModel()];
    this.jmlMerk=[{"KdMerk":"","NamaMerk":""}];
    this.index=1;
    console.log(this.dataAdd);
    console.log(this.dataMerk);
    console.log(this.jmlMerk);
  }

  addMerk(jml,dataMerk){
    this.index+=jml;
    debugger;
    console.log(dataMerk);
    this.temp=dataMerk;
    console.log(this.temp);
    this.dataMerk=new Array(this.index);
    console.log(this.dataMerk);
    for (var index = 0; index < this.index; index++) {
      debugger;
      this.jmlMerk[index] ={"KdMerk":"","NamaMerk":""};
      if(index+1 < this.index){
        this.dataMerk[index]=this.temp[index];
      }else{
        this.dataMerk[index]=new MerkModel();
      }
      debugger;
      console.log(this.dataMerk);
      console.log(this.jmlMerk);
    }
  }

  postKatBarang(dataAdd,dataMerk){
    debugger;
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    console.log(dataMerk);
    dataAdd.MerkBarang=dataMerk;
    console.log(dataAdd);
    this.http.post("http://localhost:8889/api/kategoribarang", JSON.stringify(dataAdd), opsi)
    .subscribe((res:Response) =>{
      debugger;
      window.location.href='./kategoribarang';
    })
  }

  cekIndex(i){
    console.log(i);
    debugger;
  }

}
