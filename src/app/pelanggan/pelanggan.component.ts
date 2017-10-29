import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  dataTampil:Object;
  id:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/pelanggan")
    .subscribe((res:Response) =>{
      debugger;
      this.dataTampil = res.json();
    })
  }
  hapusPelanggan(id){
    if(confirm("Apakah yakin akan di hapus ??") ==  true){
      this.http.delete("https://elektronik124.herokuapp.com/api/pelanggan/"+id)
      .subscribe((res:Response) =>{
        window.location.href = "/pelanggan";
        debugger;
        alert(res.json().NamaPelanggan+" Berhasil di hapus");
      })
    }
  }
}
