import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategoribarangrinci',
  templateUrl: './kategoribarangrinci.component.html',
  styleUrls: ['./kategoribarangrinci.component.css']
})
export class KategoribarangrinciComponent implements OnInit {

  dataDetail: Object;
  dataDetailMerk: Object;
  id: string
  constructor(private http:Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/kategoribarang/"+this.id)
    .subscribe((res:Response) => {
      this.dataDetail=res.json();
      this.dataDetailMerk=res.json().MerkBarang;
      console.log(this.dataDetail);
    })
  }
}
