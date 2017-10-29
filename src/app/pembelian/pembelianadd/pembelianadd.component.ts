import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { PembelianModel } from './pembelianadd.model';

@Component({
  selector: 'app-pembelianadd',
  templateUrl: './pembelianadd.component.html',
  styleUrls: ['./pembelianadd.component.css']
})
export class PembelianaddComponent implements OnInit {

  dataAdd: PembelianModel;
  constructor(private http: Http) { }

  ngOnInit() {
    this.dataAdd = new PembelianModel();
  }

  postPembelian(dataAdd){
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    this.http.post("http://localhost:8889/api/pembelian", JSON.stringify(dataAdd), opsi)
    .subscribe((res:Response) => {
      window.location.href='./pembelian';
    });
  }

}
