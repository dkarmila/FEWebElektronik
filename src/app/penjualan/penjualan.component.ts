import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-penjualan',
  templateUrl: './penjualan.component.html',
  styleUrls: ['./penjualan.component.css']
})
export class PenjualanComponent implements OnInit {
  dataTampil:Object;
  idPetugas:String;
  constructor(private http:Http) { }

  ngOnInit() {
    debugger;
    this.http.get("https://elektronik124.herokuapp.com/api/penjualan")
    //this.http.get("localhost:8889/api/penjualan")
    .subscribe((res:Response) =>{
      this.dataTampil = res.json();
      debugger;
    })
  }
  hapusPenjualan(idPenjualan){
    if(confirm("Apakah yakin akan di hapus ??") ==  true){
      this.http.delete("https://elektronik124.herokuapp.com/api/penjualan/"+idPenjualan)
      .subscribe((res:Response) =>{
        window.location.href = "/penjualan";
      })
    }
  }
}
