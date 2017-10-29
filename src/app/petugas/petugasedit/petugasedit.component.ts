import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-petugasedit',
  templateUrl: './petugasedit.component.html',
  styleUrls: ['./petugasedit.component.css']
})
export class PetugaseditComponent implements OnInit {

  dataEdit: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/petugas/"+this.id)
    // this.http.get("http://localhost:8889/api/barang/"+this.id)
    .subscribe((res:Response) => {
      this.dataEdit = res.json();
    })
  }

  putPetugas(id){
    debugger;
    if(this.dataEdit['KdPetugas']=="" || this.dataEdit['NamaPetugas']=="" || 
      this.dataEdit['AlamatPetugas']=="" || this.dataEdit['UsernamePetugas']=="" || 
      this.dataEdit['PasswordPetugas']==""){
      alert("Inputan Jangan Kosong Pakk");
    } else if(this.dataEdit['NoRmh']==null && this.dataEdit['NoTelp']==null){
      debugger;
      alert("No telp / No rumah salah satu harus terisi Pakk");
<<<<<<< HEAD
    }else if(this.dataEdit['NoTelp'] > 9999999999999){
      alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
    }else if(this.dataEdit['NoRmh'] > 99999999999){
=======
    }else if(this.dataEdit['NoTelp'] > '9999999999999'){
      alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
    }else if(this.dataEdit['NoRmh'] > '99999999999'){
>>>>>>> 21965c8af443192ae54bf6d1776a4808c9201bc8
      alert("No Rumah Melebihi Batas");
    } else {
      this.http.put("https://elektronik124.herokuapp.com/api/petugas/"+this.id, this.dataEdit)
      .subscribe((res:Response) => {
        window.location.href='./petugas';
        alert("Berhasil di Edit");
      })
    }
  }

}
