import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  dataTampil: Object;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/pembelian")
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
    })
  }

}
