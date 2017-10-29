import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  dataTampil: Object;
  id: string;
  status: string;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/pembelian")
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
      this.status = res.json().StatusPembayaran;
      $(document).ready(function(){
        $("#example").DataTable();
      });
    })
    if(this.status=="1"){
    }
  }

  pembelianDelete(id){
    this.http.delete("http://localhost:8889/api/pembelian/"+id)
    .subscribe((res:Response) => {
      window.location.href='./pembelian';
    })
  }

}
