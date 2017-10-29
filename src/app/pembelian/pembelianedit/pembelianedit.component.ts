import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pembelianedit',
  templateUrl: './pembelianedit.component.html',
  styleUrls: ['./pembelianedit.component.css']
})
export class PembelianeditComponent implements OnInit {

  dataEdit: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/pembelian/"+this.id)
    .subscribe((res:Response) => {
      this.dataEdit = res.json();
    })
  }

  putPembelian(id){
    this.http.put("http://localhost:8889/api/pembelian/"+this.id, this.dataEdit)
    .subscribe((res:Response) => {
      window.location.href='./pembelian';
    })
  }
}
