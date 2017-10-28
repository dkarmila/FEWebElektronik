import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-petugas',
  templateUrl: './petugas.component.html',
  styleUrls: ['./petugas.component.css']
})
export class PetugasComponent implements OnInit {
  dataTampil:Object;
  idPetugas:String;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/petugas")
    .subscribe((res:Response) =>{
      this.dataTampil = res.json();
    })
  }
  hapusPetugas(idPetugas){
    if(confirm("Apakah yakin akan di hapus ??") ==  true){
      this.http.delete("https://elektronik124.herokuapp.com/api/petugas/"+idPetugas)
      .subscribe((res:Response) =>{
        window.location.href = "/petugas";
      })
    }
  }
}
