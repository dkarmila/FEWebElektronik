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
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new BarangModel();
  }

  postBarang(dataAdd){
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    // this.http.post("https://elektronik124.herokuapp.com/api/barang", JSON.stringify(dataAdd), opsi)
    this.http.post("http://localhost:8889/api/barang", JSON.stringify(dataAdd), opsi)
    .subscribe((res:Response) => {
      window.location.href='./barang';
    })
  }

}
