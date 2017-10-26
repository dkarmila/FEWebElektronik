import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pembelianrinci',
  templateUrl: './pembelianrinci.component.html',
  styleUrls: ['./pembelianrinci.component.css']
})
export class PembelianrinciComponent implements OnInit {

  dataDetail: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/pembelian/"+this.id)
    .subscribe((res:Response) => {
      this.dataDetail = res.json();
    })
  }

}
