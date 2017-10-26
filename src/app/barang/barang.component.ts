import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

  dataTampil : Object;
  id: string;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.http.get("https://elektronik124.herokuapp.com/api/barang")
    this.http.get("http://localhost:8889/api/barang")
    .subscribe((res:Response) => {
      this.dataTampil = res.json();
    })
  }

  barangDelete(id){
    // this.http.delete("https://elektronik124.herokuapp.com/api/barang/"+id)
    debugger;
    this.http.delete("http://localhost:8889/api/barang/"+id)
    .subscribe((res:Response) => {
      window.location.href='./barang';
    })
  }

}
